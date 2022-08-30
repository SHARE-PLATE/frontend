import { Dispatch, SetStateAction } from 'react';

import SockJs from 'sockjs-client';
import StompJs from 'stompjs';

import { APP, CHAT, CHATROOMS, TOPIC } from '@constants/words';
import { getAuthHeaders } from '@utils/getAuthHeaders';

import { TestChatroomDetailChatsType } from './chatroomDetailData';

const sockServer = 'http://louie-03.com/websocket'; // 들어갈 주소 설정
const sock = new SockJs(sockServer);
const stompClient = StompJs.over(sock);

type subscribeParamsType = {
  setter: Dispatch<SetStateAction<TestChatroomDetailChatsType>>;
  chatroomId: string;
};

const subscribe = ({ setter, chatroomId }: subscribeParamsType) => {
  const subscribeURL = `/${TOPIC}/${CHATROOMS}/${chatroomId}`;
  const headers = getAuthHeaders();

  stompClient.subscribe(
    subscribeURL,
    (chatData) => {
      const newChat = JSON.parse(chatData.body);

      setter((chats) => {
        const newChats = [...chats, newChat];

        return newChats;
      });
    },
    headers,
  );
};

const unsubscribe = () => {
  stompClient.unsubscribe('sub-0');
};

export const chatroomConnect = (subscribeParams: subscribeParamsType) => {
  const headers = getAuthHeaders();

  try {
    // stompClient.debug = () => null;
    stompClient.connect(headers, () => subscribe(subscribeParams));
  } catch (error) {
    console.log(error);
  }
};

export const chatroomDisconnect = () => {
  try {
    // stompClient.debug = () => null;
    stompClient.disconnect(() => unsubscribe());
  } catch (error) {
    console.log(error);
  }
};

export const sendChat = ({ contents, chatroomId }: { contents: string; chatroomId?: string }) => {
  const headers = getAuthHeaders();
  const sendingURL = `/${APP}/${CHATROOMS}/${chatroomId}/${CHAT}`;

  stompClient.send(sendingURL, headers, JSON.stringify({ contents }));
};
