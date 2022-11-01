import { useEffect, useRef } from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';

import * as S from '@components/ToastModal/ToastModal.style';
import Modal from '@components/common/Modal';
import { CLOSE } from '@constants/words';
import useModal from '@hooks/useModal';
import { toastModalInfoState } from '@store/modal';

const ToastModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isToastModal, setIsToastModal] = useModal({ modalRef });
  const {
    trigger,
    onClose,
    optionButtonHandler,
    optionButtonTitle,
    mainButtonHandler,
    mainButtonTitle,
  } = useRecoilValue(toastModalInfoState);
  const resetToastModalInfo = useResetRecoilState(toastModalInfoState);
  const isOptionButton = optionButtonTitle && optionButtonHandler;

  const handleClickCloseButton = () => {
    setIsToastModal(false);
    resetToastModalInfo();
    onClose && onClose();
  };

  const handleClickButton = (type: 'confirm' | 'option') => {
    if (type === 'confirm') mainButtonHandler && mainButtonHandler();
    if (type === 'option') optionButtonHandler && optionButtonHandler();
    resetToastModalInfo();
    onClose && onClose();
  };

  useEffect(() => {
    setIsToastModal(!!trigger);
  }, [trigger]);

  return isToastModal ? (
    <Modal type='bottom' isFull={true}>
      <S.ModalWrapper ref={modalRef}>
        <S.ButtonContainer>
          <S.BasicButton onClick={handleClickCloseButton}>{CLOSE}</S.BasicButton>
        </S.ButtonContainer>
        <S.ButtonContainer>
          {isOptionButton && (
            <S.BasicButton onClick={() => handleClickButton('option')}>
              {optionButtonTitle}
            </S.BasicButton>
          )}
          <S.ConfirmButton onClick={() => handleClickButton('confirm')}>
            {mainButtonTitle}
          </S.ConfirmButton>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </Modal>
  ) : (
    <></>
  );
};

export default ToastModal;
