import * as S from '@components/common/Modal/Modal.style';

export interface ModalPropsTypes {
  position: string;
  closeAddressModal: () => void;
  children?: JSX.Element;
}

export const MODAL_POSITION = {
  RIGHT: 'Right',
  CENTER: 'Center',
};

const Modal = ({ position, closeAddressModal, children }: ModalPropsTypes) => {
  return (
    <S.ModalContainer position={position}>
      <S.CloseButton onClick={closeAddressModal}>닫기</S.CloseButton>
      {children}
    </S.ModalContainer>
  );
};

export default Modal;
