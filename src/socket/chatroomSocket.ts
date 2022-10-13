import SockJs from 'sockjs-client';
import StompJs from 'stompjs';

import { APP, CHAT, CHATROOMS, CHATROOM_MEMBERS, TOPIC, WEBSOCKET } from '@constants/words';
import { getAuthHeaders } from '@utils/getAuthHeaders';

type subscribeParamsType = {
  onSet: (chatData: StompJs.Message) => void;
  chatroomId?: string | number;
  chatroomIds?: string[] | number[];
};

type SendChatParamsType = { contents: string; chatroomId?: string };

const sockServer = `${process.env.REACT_APP_BASE_URL}/${WEBSOCKET}`; // 들어갈 주소 설정
const sock = new SockJs(sockServer);
const stompClient = StompJs.over(sock);

export const sendChat = ({ contents, chatroomId }: SendChatParamsType) => {
  const headers = getAuthHeaders();
  const sendingURL = `/${APP}/${CHATROOMS}/${chatroomId}/${CHAT}`;

  stompClient.send(sendingURL, headers, JSON.stringify({ contents }));
};

export const chatroomSocket = () => {
  const sockServer = `${process.env.REACT_APP_BASE_URL}/${WEBSOCKET}`; // 들어갈 주소 설정
  const sock = new SockJs(sockServer);
  const stompClient = StompJs.over(sock);

  const subscribeChat = ({ onSet, chatroomId, chatroomIds }: subscribeParamsType) => {
    const subscribeToStomp = (id: string | number) => {
      const headers = getAuthHeaders();
      const subscribeURL = `/${TOPIC}/${CHATROOM_MEMBERS}/${id}`;
      stompClient.subscribe(subscribeURL, onSet, headers);
    };

    if (chatroomId) subscribeToStomp(chatroomId);
    if (chatroomIds) chatroomIds.forEach((id) => subscribeToStomp(id));
  };

  const unsubscribe = () => {
    stompClient.unsubscribe('sub-0');
  };

  const connectChatroom = (subscribeParams: subscribeParamsType) => {
    const headers = getAuthHeaders();

    try {
      // stompClient.debug = () => null;
      stompClient.connect(headers, () => subscribeChat(subscribeParams));
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectChatroom = () => {
    try {
      // stompClient.debug = () => null;
      stompClient.disconnect(() => unsubscribe());
    } catch (error) {
      console.log(error);
    }
  };

  return { connectChatroom, disconnectChatroom };
};
