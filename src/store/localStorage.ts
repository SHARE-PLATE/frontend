import { atom } from 'recoil';

import { SEARCH_RECENT } from '@constants/words';
import { getLocalStorageInfo } from '@utils/localStorage';

type recentListInfoType = [string, { name: string; date: string }][];

const recentListInfo: recentListInfoType = Array.isArray(getLocalStorageInfo(SEARCH_RECENT))
  ? getLocalStorageInfo(SEARCH_RECENT)
  : [];

export const searchRecent = atom<Map<any, any>>({
  key: 'searchRecent',
  default: new Map(recentListInfo),
});

export const currentMapKey = atom({
  key: 'currentMapKey',
  default: '',
});
