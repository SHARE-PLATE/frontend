import { atom } from 'recoil';

export const clickedHeartId = atom<number[]>({
  key: 'clickedHeartId',
  default: [],
});

export const historyTrigger = atom<number>({
  key: 'historyTrigger',
  default: 0,
});
