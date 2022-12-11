import { atom } from 'recoil';

export const retryConnectSocketInterval = 5000; // ms
export const retryConnectSocketTimeMax = 10 * 60 * 1000; // 10mins

export const socketConnectState = atom<boolean>({
  key: 'socketConnect',
  default: false,
});

export const retryConenctSocketTimeState = atom<number>({
  key: 'retryConenctSocketTimeState',
  default: 0,
});

export const socketConnectTrigger = atom<number>({
  key: 'socketConnectTrigger',
  default: 0,
});
