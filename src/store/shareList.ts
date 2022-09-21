import { atom, selector, selectorFamily } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getShareListData, getShareListEntries, getShareMineListData } from '@api/shareList';
import { GetShareMineListDataParamsType } from '@api/shareList';
import { activeShareList } from '@store/filterShareList';
import { currentLatitudeLongitude } from '@store/location';

export const shareListTrigger = atom<number>({
  key: `shareListTrigger/${getRandomKey()}`,
  default: 0,
});

export const getShareListsData = selector({
  key: `GET/ShareListsData/${getRandomKey()}`,
  get: async ({ get }) => {
    get(shareListTrigger);
    const type = get(activeShareList);
    const location = get(currentLatitudeLongitude);
    const shareListData = await getShareListData(type, location);
    return shareListData;
  },
});

export const shareMineListTrigger = atom<number>({
  key: `shareMineListTrigger/${getRandomKey()}`,
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

export const shareListEntriesStateTrigger = atom<number>({
  key: 'shareListEntriesStateTrigger',
  default: 0,
});

export const shareListEntriesState = selector({
  key: 'shareListEntries',
  get: async ({ get }) => {
    get(shareListEntriesStateTrigger);
    const shareListEntriesData = await getShareListEntries();
    return shareListEntriesData;
  },
});
