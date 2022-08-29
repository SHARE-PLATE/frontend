import { atom } from 'recoil';

export type CurrentShareListType = 'ingredient' | 'delivery';

export const currentFilterShareList = atom({
  key: 'currentFilterShareList',
  default: 'price',
});

export const currentFilterHistoryList = atom({
  key: 'currentFilterHistoryList',
  default: false,
});

export interface activeShareListType {
  delivery: boolean;
  ingredient: boolean;
}

export const activeShareList = atom<activeShareListType>({
  key: 'activeShareList',
  default: { delivery: true, ingredient: false },
});
