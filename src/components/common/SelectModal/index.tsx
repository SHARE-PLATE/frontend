import { MouseEvent, RefObject } from 'react';

import Modal from '@components/common/Modal';
import * as S from '@components/common/SelectModal/SelectModal.style';
import { CANCEL } from '@constants/words';
import { CloseModal } from '@type/modalFunction';

interface KeywordDeleteModalPropsType {
  modalRef: RefObject<HTMLDivElement>;
  onClickOkButton: (event?: MouseEvent<HTMLButtonElement>) => void;
  onClickCancelButton?: (event?: MouseEvent<HTMLButtonElement>) => void;
  closeModal?: () => void;
  closeParameterModal?: CloseModal;
  answeringMention: string;
  okMention: string;
}

const SelectModal = ({
  modalRef,
  closeModal,
  closeParameterModal,
  onClickOkButton,
  onClickCancelButton,
  answeringMention,
  okMention,
}: KeywordDeleteModalPropsType) => {
  const handleClickCancel = (event?: MouseEvent<HTMLButtonElement>) => {
    onClickCancelButton && onClickCancelButton(event);
    if (closeModal) closeModal();
    if (closeParameterModal) closeParameterModal({ isDeleteModal: true });
  };

  return (
    <Modal type='center' isFull={true}>
      <S.ModalWrapper ref={modalRef}>
        <S.Text>{answeringMention}</S.Text>
        <S.ButtonContainer>
          <S.CloseButton onClick={handleClickCancel}>{CANCEL}</S.CloseButton>
          <S.OkButton onClick={onClickOkButton}>{okMention}</S.OkButton>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </Modal>
  );
};

export default SelectModal;
