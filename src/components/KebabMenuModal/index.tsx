import { RefObject } from 'react';

import * as S from '@components/KebabMenuModal/KebabMenuModal.style';
import Modal from '@components/common/Modal';
import { CLOSE, DELETE } from '@constants/words';
import { CloseModal, OpenModal } from '@type/modalFunction';

interface KebabMenuModalPropsType {
  modalRef: RefObject<HTMLDivElement>;
  closeModal: CloseModal;
  openModal: OpenModal;
}

const KebabMenuModal = ({ modalRef, closeModal, openModal }: KebabMenuModalPropsType) => {
  return (
    <Modal type='bottom' isFull={true}>
      <S.ModalWrapper ref={modalRef}>
        <S.ButtonContainer>
          <S.BasicButton onClick={() => closeModal({ isDeleteModal: false })}>
            {CLOSE}
          </S.BasicButton>
        </S.ButtonContainer>
        <S.ButtonContainer>
          <S.ConfirmButton
            onClick={(e) => {
              closeModal({ isDeleteModal: false });
              openModal(e, { isDeleteModal: true });
            }}
          >
            {DELETE}
          </S.ConfirmButton>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </Modal>
  );
};

export default KebabMenuModal;
