import { atom } from 'recoil';
export const currentFilterShareList = atom({
  key: 'currentFilterShareList',
  default: 'price',
});

export interface activeShareListType {
  delivery: boolean;
  ingredient: boolean;
}

export const activeShareList = atom<activeShareListType>({
  key: 'activeShareList',
  default: { delivery: true, ingredient: false },
});
