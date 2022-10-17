import { RefObject } from 'react';

import * as S from '@components/ToastModal/ToastModal.style';
import Modal from '@components/common/Modal';
import { CLOSE } from '@constants/words';

interface ToastModalPropsType {
  modalRef: RefObject<HTMLDivElement>;
  closeToastModal: () => void;
  mainButtonTitle: string;
  mainButtonHandler: () => void;
  optionButtonHandler?: () => void;
}

const ToastModal = ({
  modalRef,
  closeToastModal,
  mainButtonHandler,
  mainButtonTitle,
  optionButtonHandler,
}: ToastModalPropsType) => {
  return (
    <Modal type='bottom' isFull={true}>
      <S.ModalWrapper ref={modalRef}>
        <S.ButtonContainer>
          <S.BasicButton onClick={closeToastModal}>{CLOSE}</S.BasicButton>
        </S.ButtonContainer>
        <S.ButtonContainer>
          <S.BasicButton onClick={mainButtonHandler}>옵션</S.BasicButton>
          <S.ConfirmButton onClick={mainButtonHandler}>{mainButtonTitle}</S.ConfirmButton>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </Modal>
  );
};

export default ToastModal;
