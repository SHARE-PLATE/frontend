import { atom } from 'recoil';

type BottomMessageType = {
  trigger: number;
  message: null | string;
};

export const bottomMessageState = atom<BottomMessageType>({
  key: 'bottomMessage',
  default: {
    trigger: 0,
    message: null,
  },
});
