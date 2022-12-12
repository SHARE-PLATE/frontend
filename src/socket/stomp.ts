import SockJs from 'sockjs-client';
import StompJs from 'stompjs';

import { API } from '@constants/api';
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
} from '@constants/words';
import { getAuthHeaders } from '@utils/getAuthHeaders';

type SendChatParamsType = { contents: string; chatroomId: number };

type OnReceiveStompMessageType = (message: StompJs.Message) => void;

type SubscribeNoticeParamsType = {
  ids: number[];
  onReceiveNotice: OnReceiveStompMessageType;
  type: typeof ENTRIES | typeof KEYWORDS;
};

type SubscribeChatParamsType = {
  ids: number[];
  onReceiveChat: OnReceiveStompMessageType;
};

type ConnectStompParamsType = Pick<SubscribeNoticeParamsType, 'onReceiveNotice'> &
  Pick<SubscribeChatParamsType, 'onReceiveChat'> & {
    chatroomIds: number[];
    entryIds: number[];
    keywordIds: number[];
    onConnect: () => void;
    onError: () => void;
  };

let stompClient: StompJs.Client;

const isStompConsole = process.env.NODE_ENV === 'development';

export const getStompClient = () => {
  const sockServer = API.WEBSOCKET; // 들어갈 주소 설정
  const sock = new SockJs(sockServer);
  const newStompClient = StompJs.over(sock);
  stompClient = newStompClient;
};

export const keywordMap = new Map<number, string>();
export const entryMap = new Map<number, string>();
export const chatMap = new Map<number, string>();

type SubscribeStompClientParamsType = {
  subscribeURL: string;
  onReceiveMessage: (message: StompJs.Message) => void;
};

const subscribeStompClient = ({
  subscribeURL,
  onReceiveMessage,
}: SubscribeStompClientParamsType) => {
  const headers = getAuthHeaders();
  const { id: stompId } = stompClient.subscribe(subscribeURL, onReceiveMessage, headers);

  return stompId;
};

export const subscribeChat = ({ onReceiveChat, ids }: SubscribeChatParamsType) => {
  ids.forEach((id) => {
    const subscribeURL = `/${TOPIC}/${CHATROOM_MEMBERS}/${id}`;
    const stompId = subscribeStompClient({ subscribeURL, onReceiveMessage: onReceiveChat });
    chatMap.set(id, stompId);
  });
};

export const subscribeNotice = ({ ids, onReceiveNotice, type }: SubscribeNoticeParamsType) => {
  const baseURL = `/${QUEUE}/${NOTIFICATIONS}`;

  ids.forEach((id) => {
    const subscribeURL = baseURL + `/${type}/${id}`;
    const stompId = subscribeStompClient({ subscribeURL, onReceiveMessage: onReceiveNotice });
    entryMap.set(id, stompId);
  });
};

export const sendChat = ({ contents, chatroomId }: SendChatParamsType) => {
  const sendingURL = `/${APP}/${CHATROOMS}/${chatroomId}/${CHAT}`;
  const headers = getAuthHeaders();
  const body = JSON.stringify({ contents });

  stompClient.send(sendingURL, headers, body);
};

export const connectStomp = ({
  chatroomIds,
  entryIds,
  keywordIds,
  onConnect,
  onError,
  onReceiveChat,
  onReceiveNotice,
}: ConnectStompParamsType) => {
  const headers = getAuthHeaders();
  try {
    if (!isStompConsole) stompClient.debug = () => null;
    stompClient.connect(
      headers,
      () => {
        onConnect();
        subscribeNotice({ ids: entryIds, onReceiveNotice, type: 'entries' });
        subscribeNotice({ ids: keywordIds, onReceiveNotice, type: 'keywords' });
        subscribeChat({ ids: chatroomIds, onReceiveChat });
      },
      () => onError(),
    );
  } catch (error) {
    onError();
  }
};

export const unsubscribeStomp = (id: string) => {
  stompClient.unsubscribe(id);
};

export const disconnectStomp = (onDisconnect?: () => void) => {
  try {
    stompClient.disconnect(() => {
      onDisconnect && onDisconnect();
    });
  } catch (error) {
    console.log(error);
  }
};
