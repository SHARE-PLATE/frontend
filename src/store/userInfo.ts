import { atom } from 'recoil';

import { UserInfoDataType } from '@api/account';

export const userInfoAtom = atom<UserInfoDataType>({
  key: 'userInfoAtom',
  default: {},
});
