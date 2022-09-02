import * as S from '@components/common/Modal/Modal.style';

export interface ModalPropsTypes {
  position: S.PositionType;
  closeModal?: () => void;
  children?: JSX.Element;
  isFull?: boolean;
}

const Modal = ({ position, closeModal, children, isFull }: ModalPropsTypes) => {
  return (
    <S.ModalContainer position={position} isFull={isFull}>
      {closeModal && <S.CloseButton onClick={closeModal}>닫기</S.CloseButton>}
      {children}
    </S.ModalContainer>
  );
};

export default Modal;
