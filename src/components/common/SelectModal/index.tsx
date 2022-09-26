import { RefObject } from 'react';

import Modal from '@components/common/Modal';
import * as S from '@components/common/SelectModal/SelectModal.style';
import { deleteNoMention } from '@constants/mentions';

interface KeywordDeleteModalPropsType<T> {
  modalRef: RefObject<HTMLDivElement>;
  deleteHandler: (parameter: T) => void;
  closeAModal: () => void;
  clickHandlerParams: T;
  title: string;
  okMention: string;
}

const SelectModal = <T extends unknown>({
  modalRef,
  closeAModal,
  deleteHandler,
  clickHandlerParams,
  title,
  okMention,
}: KeywordDeleteModalPropsType<T>) => {
  return (
    <Modal type='center' isFull={true}>
      <S.Wrapper ref={modalRef}>
        <S.Text>{title}</S.Text>
        <S.ButtonContainer>
          <S.CloseButton onClick={closeAModal}>{deleteNoMention}</S.CloseButton>
          <S.OkButton onClick={() => deleteHandler(clickHandlerParams)}>{okMention}</S.OkButton>
        </S.ButtonContainer>
      </S.Wrapper>
    </Modal>
  );
};

export default SelectModal;
