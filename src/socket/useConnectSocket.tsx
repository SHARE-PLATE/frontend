import { useEffect, useRef } from 'react';

import { useRecoilState } from 'recoil';

import { socketConnectState } from '@store/socket';

import { connectStomp, disconnectStomp, getStompClient } from './stomp';
import { useSubscribedIds } from './useSubscribedIds';
import { useUpdateChat } from './useUpdateChat';
import { useUpdateNotice } from './useUpdateNotice';

export const retryConnectSocketInterval = 5000; // ms
export const retryConnectSocketTimeMax = 10 * 60 * 1000; // 10mins

export const useConnectSocket = () => {
  const subscribedIds = useSubscribedIds();
  const [socketConnect, setSocketConnect] = useRecoilState(socketConnectState);
  const updateNotice = useUpdateNotice();
  const updateChat = useUpdateChat();
  const retryConnectSocketTime = useRef(0);

  const markSocketConnected = () => {
    retryConnectSocketTime.current = 0;
    setSocketConnect('connected');
  };

  const startConnectingSocket = () => setSocketConnect('connecting');

  const disconnectSocket = () => {
    if (socketConnect === 'disconnected') return;

    disconnectStomp();
    setSocketConnect('disconnected');
  };

  const retryConnectSocket = () => {
    if (retryConnectSocketTime.current > retryConnectSocketTimeMax) return;

    retryConnectSocketTime.current += retryConnectSocketInterval;
    disconnectSocket();

    setTimeout(() => startConnectingSocket(), retryConnectSocketInterval);
  };

  const connectSocket = () => {
    if (!subscribedIds || socketConnect !== 'connecting') return;

    getStompClient();
    connectStomp({
      onError: retryConnectSocket,
      onConnect: markSocketConnected,
      onReceiveChat: updateChat,
      onReceiveNotice: updateNotice,
      ...subscribedIds,
    });
  };

  window.addEventListener('offline', retryConnectSocket);

  useEffect(() => {
    startConnectingSocket();
  }, []);

  return connectSocket;
};
