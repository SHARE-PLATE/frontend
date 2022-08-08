import { atom } from 'recoil';

import { getLocalStorageInfo, SEARCH_RECENT_KEY } from '@utils/LocalStorage';

type recentListInfoType = [string, { name: string; date: string }][];

const recentListInfo: recentListInfoType = Array.isArray(getLocalStorageInfo(SEARCH_RECENT_KEY))
  ? getLocalStorageInfo(SEARCH_RECENT_KEY)
  : [];

export const searchRecent = atom<Map<any, any>>({
  key: 'searchRecent',
  default: new Map(recentListInfo),
});
