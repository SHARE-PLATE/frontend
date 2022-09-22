import { atom } from 'recoil';

export const thumbnailImageUrl = atom<string>({
  key: 'thumbnailImageUrl',
  default: '',
});

export const isLoginState = atom<boolean>({
  key: 'isLogin',
  default: false,
});
