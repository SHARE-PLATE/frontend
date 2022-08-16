import { atom } from 'recoil';

export type CurrentShareListType = 'ingredient' | 'delivery';

export const currentFilterShareList = atom({
  key: 'currentFilterShareList',
  default: 'price',
});

export const currentShareList = atom<CurrentShareListType>({
  key: 'currentShareList',
  default: 'delivery',
});

export const activeShareList = atom({
  key: 'activeShareList',
  default: { delivery: true, ingredient: false },
});
