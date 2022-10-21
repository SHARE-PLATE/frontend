import SockJs from 'sockjs-client';
import StompJs from 'stompjs';

import {
  APP,
  CHAT,
  CHATROOMS,
  CHATROOM_MEMBERS,
  ENTRIES,
  KEYWORDS,
  NOTIFICATIONS,
  QUEUE,
  TOPIC,
  WEBSOCKET,
} from '@constants/words';
import { getAuthHeaders } from '@utils/getAuthHeaders';

type SendChatParamsType = { contents: string; chatroomId?: string };

type subscribeNoticeParamsType = {
  entryIds: number[];
  keywordIds: number[];
  onSubscribeEntries: (entryData: StompJs.Message) => void;
  onSubscribeKeywords: (keywordData: StompJs.Message) => void;
};

type subscribeChatParamsType = {
  onReceiveChat: (chatData: StompJs.Message) => void;
  chatroomId?: string | number;
  chatroomIds?: string[] | number[];
};

type connectParams = {
  noticeParams: subscribeNoticeParamsType;
  chatParams: subscribeChatParamsType;
};

const sockServer = `${process.env.REACT_APP_BASE_URL}/${WEBSOCKET}`; // 들어갈 주소 설정
const sock = new SockJs(sockServer);
export const stompClient = StompJs.over(sock);

const subscribeChat = ({ onReceiveChat, chatroomId, chatroomIds }: subscribeChatParamsType) => {
  const subscribeToStomp = (id: string | number) => {
    const headers = getAuthHeaders();
    const subscribeURL = `/${TOPIC}/${CHATROOM_MEMBERS}/${id}`;
    stompClient.subscribe(subscribeURL, onReceiveChat, headers);
  };

  if (chatroomId) subscribeToStomp(chatroomId);
  if (chatroomIds) chatroomIds.forEach((id) => subscribeToStomp(id));
};

const subscribeNotice = ({
  entryIds,
  keywordIds,
  onSubscribeEntries,
  onSubscribeKeywords,
}: subscribeNoticeParamsType) => {
  const subscribeURL = `/${QUEUE}/${NOTIFICATIONS}`;
  const headers = getAuthHeaders();

  if (!!entryIds.length) {
    entryIds.forEach((id) => {
      stompClient.subscribe(subscribeURL + `/${ENTRIES}/${id}`, onSubscribeEntries, headers);
    });
  }

  if (!!keywordIds.length) {
    keywordIds.forEach((id) => {
      stompClient.subscribe(subscribeURL + `/${KEYWORDS}/${id}`, onSubscribeKeywords, headers);
    });
  }
};

export const sendChat = ({ contents, chatroomId }: SendChatParamsType) => {
  const headers = getAuthHeaders();
  const sendingURL = `/${APP}/${CHATROOMS}/${chatroomId}/${CHAT}`;

  stompClient.send(sendingURL, headers, JSON.stringify({ contents }));
};

export const connectStomp = ({ noticeParams, chatParams }: connectParams) => {
  const headers = getAuthHeaders();
  try {
    // stompClient.debug = () => null;
    stompClient.connect(headers, () => {
      subscribeNotice(noticeParams);
      subscribeChat(chatParams);
    });
  } catch (error) {
    console.log(error);
  }
};

export const unsubscribeStomp = (id?: string) => {
  stompClient.unsubscribe(id || '');
};

export const disconnectStomp = () => {
  try {
    // stompClient.debug = () => null;
    stompClient.disconnect(() => unsubscribeStomp());
  } catch (error) {
    console.log(error);
  }
};
