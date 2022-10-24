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
  chatroomId?: number;
  chatroomIds?: number[];
};

type ConnectStompParamsType = {
  noticeParams: subscribeNoticeParamsType;
  chatParams: subscribeChatParamsType;
  onConnect: () => void;
  onError: () => void;
};

const sockServer = `${process.env.REACT_APP_BASE_URL}/${WEBSOCKET}`; // 들어갈 주소 설정
const sock = new SockJs(sockServer);
export const stompClient = StompJs.over(sock);
export const keywordMap = new Map<number, string>();
export const entryMap = new Map<number, string>();
export const chatMap = new Map<number, string>();

export const subscribeChat = ({
  onReceiveChat,
  chatroomId,
  chatroomIds,
}: subscribeChatParamsType) => {
  const subscribeToStomp = (id: number) => {
    const subscribeURL = `/${TOPIC}/${CHATROOM_MEMBERS}/${id}`;
    const headers = getAuthHeaders();
    const { id: stompId } = stompClient.subscribe(subscribeURL, onReceiveChat, headers);
    chatMap.set(id, stompId);
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

  if (!!entryIds.length) {
    entryIds.forEach((id) => {
      const headers = getAuthHeaders();
      const { id: stompId } = stompClient.subscribe(
        subscribeURL + `/${ENTRIES}/${id}`,
        onSubscribeEntries,
        headers,
      );
      entryMap.set(id, stompId);
    });
  }

  if (!!keywordIds.length) {
    keywordIds.forEach((id) => {
      const headers = getAuthHeaders();
      const { id: stompId } = stompClient.subscribe(
        subscribeURL + `/${KEYWORDS}/${id}`,
        onSubscribeKeywords,
        headers,
      );
      keywordMap.set(id, stompId);
    });
  }
};

export const sendChat = ({ contents, chatroomId }: SendChatParamsType) => {
  const sendingURL = `/${APP}/${CHATROOMS}/${chatroomId}/${CHAT}`;
  const headers = getAuthHeaders();
  const body = JSON.stringify({ contents });

  stompClient.send(sendingURL, headers, body);
};

export const connectStomp = ({
  noticeParams,
  chatParams,
  onConnect,
  onError,
}: ConnectStompParamsType) => {
  const headers = getAuthHeaders();
  try {
    // stompClient.debug = () => null;
    stompClient.connect(
      headers,
      () => {
        onConnect();
        subscribeNotice(noticeParams);
        subscribeChat(chatParams);
      },
      () => {
        onError();
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const unsubscribeStomp = (id?: string) => {
  stompClient.unsubscribe(id || '');
};

export const disconnectStomp = (onDisconnect: () => void) => {
  try {
    // stompClient.debug = () => null;
    stompClient.disconnect(() => {
      unsubscribeStomp();
      onDisconnect();
    });
  } catch (error) {
    console.log(error);
  }
};
