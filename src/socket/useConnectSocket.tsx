import { useState } from 'react';

import { useRecoilState, useResetRecoilState } from 'recoil';

import {
  retryConenctSocketTimeState,
  retryConnectSocketInterval,
  retryConnectSocketTimeMax,
  socketConnectState,
} from '@store/socket';

import { connectStomp, getStompClient } from './stomp';
import { useSubscribedIds } from './useSubscribedIds';
import { useUpdateChat } from './useUpdateChat';
import { useUpdateNotice } from './useUpdateNotice';

export const useConnectSocket = () => {
  const subscribedIds = useSubscribedIds();
  const [retryConnectSocketTime, setRetryConnectSocketTime] = useRecoilState(
    retryConenctSocketTimeState,
  );
  const resetRetryConnectSocketTime = useResetRecoilState(retryConenctSocketTimeState);
  const [socketConnect, setSocketConnect] = useRecoilState(socketConnectState);
  const updateNotice = useUpdateNotice();
  const updateChat = useUpdateChat();
  const [socketConnecting, setSocketConnecting] = useState(false);

  const checkSocketConnected = () => {
    resetRetryConnectSocketTime();
    setSocketConnecting(false);
    setSocketConnect(true);
  };

  const retryConnectSocket = () => {
    if (retryConnectSocketTime > retryConnectSocketTimeMax) return;
    if (socketConnect) return;

    setRetryConnectSocketTime((prev) => (prev += retryConnectSocketInterval));
    setSocketConnect(false);
    setTimeout(() => {
      getStompClient();
      connectSocket();
    }, retryConnectSocketInterval);
  };

  const connectSocket = () => {
    if (!subscribedIds || socketConnecting || socketConnect) return;

    const { entryIds, keywordIds, chatroomIds } = subscribedIds;

    setSocketConnecting(true);
    getStompClient();
    connectStomp({
      onError: retryConnectSocket,
      onConnect: checkSocketConnected,
      noticeParams: {
        entryIds,
        keywordIds,
        onSubscribeEntries: updateNotice,
        onSubscribeKeywords: updateNotice,
      },
      chatParams: { chatroomIds, onReceiveChat: updateChat },
    });

    window.addEventListener('offline', retryConnectSocket);
  };

  return connectSocket;
};
