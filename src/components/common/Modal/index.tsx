import { ReactElement } from 'react';

import { FlattenSimpleInterpolation } from 'styled-components';

import * as S from '@components/common/Modal/Modal.style';

export interface ModalPropsTypes {
  type: S.ModalType;
  children: ReactElement;
  isFull: boolean;
  customedStyle?: FlattenSimpleInterpolation;
}

const Modal = ({ type, children, isFull, customedStyle }: ModalPropsTypes) => {
  return (
    <>
      <S.ModalBackground isFull={isFull} />
      <S.ModalContainer type={type} customedStyle={customedStyle}>
        {children}
      </S.ModalContainer>
    </>
  );
};

export default Modal;
