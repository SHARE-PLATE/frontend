import { atom } from 'recoil';

export const currentFilterShareList = atom({
  key: 'currentFilterShareList',
  default: 'price',
});

export type activeShareListType = 'delivery' | 'ingredient';

export const activeShareList = atom<activeShareListType>({
  key: 'activeShareList',
  default: 'delivery',
});
