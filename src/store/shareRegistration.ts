import { atom } from 'recoil';

export const pricePossible = atom<boolean>({
  key: 'pricePossible',
  default: false,
});

export const locationPossible = atom<boolean>({
  key: 'locationPossible',
  default: false,
});

export const tagList = atom<string[]>({
  key: 'tagList',
  default: [],
});

export const isSelectedOption = atom<boolean>({
  key: 'isSelectedOption',
  default: false,
});
