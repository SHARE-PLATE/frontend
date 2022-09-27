import { RefObject } from 'react';

import * as S from '@components/common/FailedModal/FailedModal';
import Modal from '@components/common/Modal';
import { close } from '@constants/mentions';
interface FailedModalPropsType {
  modalRef: RefObject<HTMLDivElement>;
  closeModal: () => void;
  text: string;
}

const FailedModal = ({ modalRef, closeModal, text }: FailedModalPropsType) => {
  return (
    <Modal type='center' isFull={true}>
      <S.Wrapper ref={modalRef}>
        <S.Text>{text}</S.Text>
        <S.CloseButton onClick={closeModal}>{close}</S.CloseButton>
      </S.Wrapper>
    </Modal>
  );
};

export default FailedModal;
