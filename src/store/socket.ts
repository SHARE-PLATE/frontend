import { atom } from 'recoil';

export const socketConnectState = atom<boolean>({
  key: 'socketConnect',
  default: false,
});
