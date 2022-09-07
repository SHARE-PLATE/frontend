import * as S from '@components/common/Modal/Modal.style';

export interface ModalPropsTypes {
  type: string;
  children?: JSX.Element;
  isFull: boolean;
}

const Modal = ({ type, children, isFull }: ModalPropsTypes) => {
  return (
    <S.ModalBackground isFull={isFull}>
      <S.ModalContainer type={type}>{children}</S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Modal;
