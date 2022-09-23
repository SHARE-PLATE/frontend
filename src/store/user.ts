import { atom, selector } from 'recoil';

import { checkVerification, getBackAccessToken } from '@api/account';

export const thumbnailImageUrl = atom<string>({
  key: 'thumbnailImageUrl',
  default: '',
});

export const isLoginTriggerState = atom<number>({
  key: 'GET/verification',
  default: 0,
});

export const isLoginState = selector<boolean>({
  key: 'GET/isLogin',
  get: async ({ get }) => {
    get(isLoginTriggerState);
    const isVerificationRight = await checkVerification();
    if (isVerificationRight) return true;
    const isGetAccessToken = await getBackAccessToken();
    if (isGetAccessToken) return true;

    return false;
  },
});
