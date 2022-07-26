import { atom, selector, selectorFamily } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getShareListData, getShareListEntries, getShareMineListData } from '@api/shareList';
import { GetShareMineListDataParamsType } from '@api/shareList';
import { activeShareList } from '@store/filterShareList';
import { currentLatitudeLongitude } from '@store/location';

import { LatitudeLongitudeType } from './location';
import { socketConnectTrigger } from './socket';

export const shareListTrigger = atom<number>({
  key: `shareListTrigger/${getRandomKey()}`,
  default: 0,
});

export const getShareListsData = selectorFamily({
  key: `GET/ShareListsData/${getRandomKey()}`,
  get:
    ({ newLatitudeLongitude }: { newLatitudeLongitude?: LatitudeLongitudeType }) =>
    async ({ get }) => {
      get(shareListTrigger);
      const type = get(activeShareList);
      const curLocation = get(currentLatitudeLongitude);
      const location = newLatitudeLongitude || curLocation;
      const shareListData = await getShareListData({ type, location });
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
    ({ isExpired = false, mineType }: GetShareMineListDataParamsType) =>
    async ({ get }) => {
      get(shareMineListTrigger);
      const shareMineListData = await getShareMineListData({ isExpired, mineType });
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
    get(socketConnectTrigger);
    const shareListEntriesData = await getShareListEntries();
    return shareListEntriesData;
  },
});
