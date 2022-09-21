import { isMobile } from 'react-device-detect';
import { atom } from 'recoil';

export const maxHeightAtom = atom<number>({
  key: 'maxHeightAtom',
  default: isMobile ? 600 : 700,
});

export const curHightAtom = atom<number>({
  key: 'curHightAtom',
  default: 0,
});
