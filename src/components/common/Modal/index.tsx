import { MouseEvent, ReactElement } from 'react';

import { FlattenSimpleInterpolation } from 'styled-components';

import * as S from '@components/common/Modal/Modal.style';

export type OnClickBackgroundType = (event?: MouseEvent<HTMLDivElement>) => void;

export interface ModalPropsTypes {
  type: S.ModalType;
  children: ReactElement;
  isFull: boolean;
  onClickBackground?: OnClickBackgroundType;
  customedStyle?: FlattenSimpleInterpolation;
}

const Modal = ({ type, children, isFull, customedStyle, onClickBackground }: ModalPropsTypes) => {
  const handleClickBackground = (event: MouseEvent<HTMLDivElement>) => {
    onClickBackground && onClickBackground(event);
  };

  return (
    <>
      <S.ModalBackground isFull={isFull} onClick={handleClickBackground} />
      <S.ModalContainer type={type} customedStyle={customedStyle}>
        {children}
      </S.ModalContainer>
    </>
  );
};

export default Modal;
