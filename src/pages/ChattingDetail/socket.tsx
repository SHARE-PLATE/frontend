import { Dispatch, SetStateAction } from 'react';

import SockJs from 'sockjs-client';
import StompJs from 'stompjs';

import { TestChattingDetailChatsType } from './chattingDetailData';

const header = {}; // 서버와의 작업 시 지정할 헤
const id = ''; // 연결을 끊을 id
const sendDestination = '/app/rooms/1/message'; // 서버의 데이터를 받을 위치
const receiveDestination = '/topic/rooms/1'; // 서버의 데이터를 받을 위치

const sockServer = 'https://louie-03.com/websocket'; // 들어갈 주소 설정
const sock = new SockJs(sockServer);
const stompClient = StompJs.over(sock);

type subscribeParamsType = {
  setter: Dispatch<SetStateAction<TestChattingDetailChatsType>>;
};

const subscribe = ({ setter }: subscribeParamsType) => {
  stompClient.subscribe(
    receiveDestination,
    (chatData) => {
      setter((chats) => {
        const newChat = JSON.parse(chatData.body);
        const newChats = [...chats];
        newChats.push(newChat);
        return newChats;
      });
    },
    header,
  );
};

const unsubscribe = () => {
  stompClient.unsubscribe(id);
};

export const chattingConnect = (subscribeParams: subscribeParamsType) => {
  try {
    // stompClient.debug = () => null;
    stompClient.connect(header, () => subscribe(subscribeParams));
  } catch (error) {
    console.log(error);
  }
};

export const chattingDisconnect = () => {
  try {
    stompClient.debug = () => null;
    stompClient.disconnect(unsubscribe, header);
  } catch (error) {
    console.log(error);
  }
};

export const sendChat = (chat: { writer: string; content: string }) => {
  stompClient.send(sendDestination, header, JSON.stringify(chat));
};
