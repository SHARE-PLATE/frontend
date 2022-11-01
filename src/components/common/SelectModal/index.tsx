import { useEffect, useRef } from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';

import Modal from '@components/common/Modal';
import * as S from '@components/common/SelectModal/SelectModal.style';
import { CANCEL } from '@constants/words';
import useModal from '@hooks/useModal';
import { selectModalInfoState } from '@store/modal';

const SelectModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSelectModal, setIsSelectModal] = useModal({ modalRef });
  const { trigger, onClickCancelButton, onClickOkButton, okMention, answeringMention } =
    useRecoilValue(selectModalInfoState);
  const resetSelectModalInfo = useResetRecoilState(selectModalInfoState);

  const handleClickOkButton = () => {
    onClickOkButton && onClickOkButton();
    setIsSelectModal(false);
  };

  const handleClickCancel = () => {
    onClickCancelButton && onClickCancelButton();
    setIsSelectModal(false);
    resetSelectModalInfo();
  };

  useEffect(() => {
    if (trigger) setIsSelectModal(true);
  }, [trigger]);

  return isSelectModal ? (
    <Modal type='center' isFull={true}>
      <S.ModalWrapper ref={modalRef}>
        <S.Text>{answeringMention}</S.Text>
        <S.ButtonContainer>
          <S.CloseButton onClick={handleClickCancel}>{CANCEL}</S.CloseButton>
          <S.OkButton onClick={handleClickOkButton}>{okMention}</S.OkButton>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </Modal>
  ) : (
    <></>
  );
};

export default SelectModal;
