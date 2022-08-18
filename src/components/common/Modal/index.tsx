import * as S from '@components/common/Modal/Modal.style';

export interface ModalPropsTypes {
  position: string;
  closeModal?: () => void;
  children?: JSX.Element;
}

export const MODAL_POSITION = {
  RIGHT: 'Right',
  CENTER: 'Center',
};

const Modal = ({ position, closeModal, children }: ModalPropsTypes) => {
  return (
    <S.ModalContainer position={position}>
      {closeModal && <S.CloseButton onClick={closeModal}>닫기</S.CloseButton>}
      {children}
    </S.ModalContainer>
  );
};

export default Modal;
