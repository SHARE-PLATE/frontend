import { atom } from 'recoil';
export const currentFilterShareList = atom({
  key: 'currentFilterShareList',
  default: 'price',
});

export const currentShareList = atom({
  key: 'currentShareList',
  default: 'delivery',
});

export const activeShareList = atom({
  key: 'activeShareList',
  default: { delivery: true, ingredient: false },
});
