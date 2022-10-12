import { atom } from 'recoil';

export type FilterType = 'price' | 'distance' | 'recency' | 'deadline';

export const currentFilterShareList = atom<FilterType>({
  key: 'currentFilterShareList',
  default: 'price',
});

export type activeShareListType = 'delivery' | 'ingredient';

export const activeShareList = atom<activeShareListType>({
  key: 'activeShareList',
  default: 'delivery',
});
