import { MouseEvent, RefObject } from 'react';

import * as S from '@components/ToastModal/ToastModal.style';
import Modal, { OnClickBackgroundType } from '@components/common/Modal';
import { CLOSE } from '@constants/words';

interface ToastModalPropsType {
  modalRef: RefObject<HTMLDivElement>;
  onClickCloseButton: (event?: MouseEvent<HTMLButtonElement>) => void;
  mainButtonTitle: string;
  mainButtonHandler: (event?: MouseEvent<HTMLButtonElement>) => void;
  optionButtonTitle?: string;
  optionButtonHandler?: (event?: MouseEvent<HTMLButtonElement>) => void;
  onClickBackground?: OnClickBackgroundType;
}

const ToastModal = ({
  modalRef,
  onClickCloseButton,
  mainButtonHandler,
  mainButtonTitle,
  optionButtonTitle,
  optionButtonHandler,
  onClickBackground,
}: ToastModalPropsType) => {
  const isOptionButton = optionButtonTitle && optionButtonHandler;
  const handleClickBackground = (event?: MouseEvent<HTMLDivElement>) => {
    onClickBackground && onClickBackground(event);
  };

  return (
    <Modal type='bottom' isFull={true} onClickBackground={handleClickBackground}>
      <S.ModalWrapper ref={modalRef}>
        <S.ButtonContainer>
          <S.BasicButton onClick={onClickCloseButton}>{CLOSE}</S.BasicButton>
        </S.ButtonContainer>
        <S.ButtonContainer>
          {isOptionButton && (
            <S.BasicButton onClick={optionButtonHandler}>{optionButtonTitle}</S.BasicButton>
          )}
          <S.ConfirmButton onClick={mainButtonHandler}>{mainButtonTitle}</S.ConfirmButton>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </Modal>
  );
};

export default ToastModal;
