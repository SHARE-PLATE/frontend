import { atom } from 'recoil';

export const thumbnailImageUrl = atom<string>({
  key: 'thumbnailImageUrl',
  default: '',
});
