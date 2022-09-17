import { ReactElement } from 'react';

import * as S from '@components/common/Modal/Modal.style';

export interface ModalPropsTypes {
  type: S.ModalType;
  children: ReactElement;
  isFull: boolean;
}

const Modal = ({ type, children, isFull }: ModalPropsTypes) => {
  return (
    <>
      <S.ModalBackground isFull={isFull} />
      <S.ModalContainer type={type}>{children}</S.ModalContainer>
    </>
  );
};

export default Modal;
