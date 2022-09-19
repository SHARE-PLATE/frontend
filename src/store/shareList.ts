import { atom, selector, selectorFamily } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getShareListData, getShareMineListData } from '@api/shareList';
import { GetShareMineListDataParamsType } from '@api/shareList';
import { activeShareList } from '@store/filterShareList';
import { currentLatitudeLongitude } from '@store/location';

export const shareListTrigger = atom<number>({
  key: 'shareListTrigger',
  default: 0,
});

export const getShareListsData = selector({
  key: 'GET/ShareListsData',
  get: async ({ get }) => {
    get(shareListTrigger);
    const type = get(activeShareList);
    const location = get(currentLatitudeLongitude);
    const shareListData = await getShareListData(type, location);
    return shareListData;
  },
});

export const shareMineListTrigger = atom<number>({
  key: 'shareMineListTrigger',
  default: 0,
});

export const shareMineListState = selectorFamily({
  key: `GET/shareMineList/${getRandomKey()}`,
  get:
    ({ isExpired = false, shareType, mineType }: GetShareMineListDataParamsType) =>
    async ({ get }) => {
      get(shareMineListTrigger);
      const shareMineListData = await getShareMineListData({ isExpired, shareType, mineType });
      return shareMineListData;
    },
});
