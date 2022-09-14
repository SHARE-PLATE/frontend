import { atom } from 'recoil';

export type activeNoticeType = 'activity' | 'keyword';

export const activeNoticeState = atom<activeNoticeType>({
  key: 'activeNoticeState',
  default: 'activity',
});
