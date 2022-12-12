import { atom } from 'recoil';

type SocketConnectStateType = 'connected' | 'disconnected' | 'connecting';

export const socketConnectState = atom<SocketConnectStateType>({
  key: 'socketConnect',
  default: 'disconnected',
});

export const socketConnectTrigger = atom<number>({
  key: 'socketConnectTrigger',
  default: 0,
});
