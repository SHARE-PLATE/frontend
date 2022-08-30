import { Dispatch, SetStateAction } from 'react';

import SockJs from 'sockjs-client';
import StompJs from 'stompjs';

import { CHAT, CHATROOMS } from '@constants/words';
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
  const subscribeURL = `${CHATROOMS}/${chatroomId}`;
  const headers = getAuthHeaders();

  stompClient.subscribe(
    subscribeURL,
    (chatData) => {
      setter((chats) => {
        const newChat = JSON.parse(chatData.body);
        const newChats = [...chats];
        newChats.push(newChat);
        return newChats;
      });
    },
    headers,
  );
};

const unsubscribe = () => {
  const id = '';
  stompClient.unsubscribe(id);
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
  const headers = getAuthHeaders();

  try {
    // stompClient.debug = () => null;
    stompClient.disconnect(unsubscribe, headers);
  } catch (error) {
    console.log(error);
  }
};

export const sendChat = ({ content, chatroomId }: { content: string; chatroomId?: string }) => {
  const headers = getAuthHeaders();
  const sendingURL = `${CHATROOMS}/${chatroomId}/${CHAT}`;

  stompClient.send(sendingURL, headers, JSON.stringify({ content }));
};
