import { useRecoilState, useRecoilValueLoadable, useResetRecoilState } from 'recoil';

import {
  retryConenctSocketTimeState,
  retryConnectSocketInterval,
  retryConnectSocketTimeMax,
  socketConnectState,
} from '@store/socket';
import { isLoginState } from '@store/user';

import { connectStomp, getStompClient } from './stomp';
import { useSubscribedIds } from './useSubscribedIds';
import { useUpdateChat } from './useUpdateChat';
import { useUpdateNotice } from './useUpdateNotice';

export const useConnectSocket = () => {
  const subscribedIds = useSubscribedIds();
  const { contents: isLogin } = useRecoilValueLoadable(isLoginState);
  const [retryConnectSocketTime, setRetryConnectSocketTime] = useRecoilState(
    retryConenctSocketTimeState,
  );
  const resetRetryConnectSocketTime = useResetRecoilState(retryConenctSocketTimeState);
  const [socketConnect, setSocketConnect] = useRecoilState(socketConnectState);
  const updateNotice = useUpdateNotice();
  const updateChat = useUpdateChat();

  const checkSocketConnected = () => {
    resetRetryConnectSocketTime();
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
    console.log('hi');
    if (!subscribedIds || !isLogin) return;

    const { entryIds, keywordIds, chatroomIds } = subscribedIds;
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
