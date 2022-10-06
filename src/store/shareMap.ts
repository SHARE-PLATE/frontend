import { isMobile } from 'react-device-detect';
import { atom } from 'recoil';

export const maxTopAtom = atom<number>({
  key: 'maxHeightAtom',
  default: isMobile ? 18 : 14,
});

export const curTopAtom = atom<number>({
  key: 'curHightAtom',
  default: 0,
});

export const minTopAtom = atom<number>({
  key: 'minTopAtom',
  default: isMobile ? 91 : 93,
});
