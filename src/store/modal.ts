import { MouseEvent } from 'react';

import { atom } from 'recoil';

type selectModalInfoStateType = {
  onClickCancelButton?: (event?: MouseEvent<HTMLButtonElement>) => void;
  onClickOkButton?: (event?: MouseEvent<HTMLButtonElement>) => void;
  answeringMention?: string;
  okMention?: string;
  trigger: number;
};

export const selectModalInfoState = atom<selectModalInfoStateType>({
  key: 'selectModalInfo',
  default: { trigger: 0 },
});
