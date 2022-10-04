import { atom } from 'recoil';

export const pricePossible = atom<boolean>({
  key: 'pricePossible',
  default: false,
});

export const locationPossible = atom<boolean>({
  key: 'locationPossible',
  default: false,
});

export const tagsState = atom<string[]>({
  key: 'tagList',
  default: [],
});

export const isSelectedOptionState = atom<boolean>({
  key: 'isSelectedOptionState',
  default: false,
});
