import { atom } from 'recoil';

export type BottomMessageType = null | string;

type BottomMessageStateType = {
  trigger: number;
  message: BottomMessageType;
};

export const bottomMessageState = atom<BottomMessageStateType>({
  key: 'bottomMessage',
  default: {
    trigger: 0,
    message: null,
  },
});
