import { atom, selector } from 'recoil';

import { getShareListData } from '@api/shareList';
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
