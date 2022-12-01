import { atom, selector } from 'recoil';

import { getUserInfoData, UserInfoDataType } from '@api/account';

export const userInfoStateTrigger = atom<number>({
  key: 'userInfoStateTrigger',
  default: 0,
});

export const userInfoState = selector<UserInfoDataType | undefined>({
  key: 'userInfoState',
  get: async ({ get }) => {
    get(userInfoStateTrigger);
    const userInfoData = await getUserInfoData();
    return userInfoData;
  },
});
