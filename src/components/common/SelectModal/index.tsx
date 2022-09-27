import { RefObject } from 'react';

import Modal from '@components/common/Modal';
import * as S from '@components/common/SelectModal/SelectModal.style';
import { deleteNoMention } from '@constants/mentions';
import { CloseModal } from '@type/modalFunction';

interface KeywordDeleteModalPropsType<T> {
  modalRef: RefObject<HTMLDivElement>;
  deleteHandler: (parameter: T) => void;
  closeModal?: () => void;
  closeParameterModal?: CloseModal;
  clickHandlerParams: T;
  title: string;
  okMention: string;
}

const SelectModal = <T extends unknown>({
  modalRef,
  closeModal,
  closeParameterModal,
  deleteHandler,
  clickHandlerParams,
  title,
  okMention,
}: KeywordDeleteModalPropsType<T>) => {
  const curCloseModal = () => {
    if (closeModal) closeModal();
    if (closeParameterModal) closeParameterModal({ isDeleteModal: true });
  };

  return (
    <Modal type='center' isFull={true}>
      <S.ModalWrapper ref={modalRef}>
        <S.Text>{title}</S.Text>
        <S.ButtonContainer>
          <S.CloseButton onClick={curCloseModal}>{deleteNoMention}</S.CloseButton>
          <S.OkButton onClick={() => deleteHandler(clickHandlerParams)}>{okMention}</S.OkButton>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </Modal>
  );
};

export default SelectModal;
