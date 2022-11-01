import { MouseEvent } from 'react';

import { atom } from 'recoil';

type SelectModalInfoStateType = {
  trigger: number;
  onClickCancelButton?: (event?: MouseEvent<HTMLButtonElement>) => void;
  onClickOkButton?: (event?: MouseEvent<HTMLButtonElement>) => void;
  answeringMention?: string;
  okMention?: string;
};

type ToastModalInfoStateType = {
  trigger: number;
  onClose?: (event?: MouseEvent<HTMLButtonElement>) => void;
  mainButtonTitle?: string;
  mainButtonHandler?: (event?: MouseEvent<HTMLButtonElement>) => void;
  optionButtonTitle?: string;
  optionButtonHandler?: (event?: MouseEvent<HTMLButtonElement>) => void;
};

export const selectModalInfoState = atom<SelectModalInfoStateType>({
  key: 'selectModalInfo',
  default: { trigger: 0 },
});

export const toastModalInfoState = atom<ToastModalInfoStateType>({
  key: 'toastModalInfo',
  default: { trigger: 0 },
});
