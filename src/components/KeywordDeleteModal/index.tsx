import { RefObject } from 'react';

import * as S from '@components/KeywordDeleteModal/KeywordDeleteModal.style';
import Modal from '@components/common/Modal';
import {
  addressKeywordDeleteMention,
  addressKeywordQuestionMention,
  deleteMention,
} from '@constants/mentions';
interface KeywordDeleteModalPropsType {
  modalRef: RefObject<HTMLDivElement>;
  deleteHandler: (curLocation: string) => void;
  closeAModal: () => void;
}

const KeywordDeleteModal = ({
  modalRef,
  deleteHandler,
  closeAModal,
}: KeywordDeleteModalPropsType) => {
  return (
    <Modal type='center' isFull={true}>
      <S.Wrapper ref={modalRef}>
        <S.Text>{addressKeywordQuestionMention}</S.Text>
        <S.ButtonContainer>
          <S.CloseButton onClick={closeAModal}>{deleteMention}</S.CloseButton>
          <S.OkButton onClick={() => deleteHandler('목동')}>
            {addressKeywordDeleteMention}
          </S.OkButton>
        </S.ButtonContainer>
      </S.Wrapper>
    </Modal>
  );
};

export default KeywordDeleteModal;
