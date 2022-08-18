import { RefObject } from 'react';

import styled, { css } from 'styled-components';

import Modal, { MODAL_POSITION } from '@components/common/Modal';
import { flexCenter } from '@styles/mixin';

interface FileRegistrationFailedModalPropsType {
  modalRef: RefObject<HTMLDivElement>;
  closeAModal: () => void;
}

const FileRegistrationFailedModal = ({
  modalRef,
  closeAModal,
}: FileRegistrationFailedModalPropsType) => {
  return (
    <Modal position={MODAL_POSITION.CENTER}>
      <Wrapper ref={modalRef}>
        <Text>이미지는 최대 5장까지 첨부할 수 있어요</Text>
        <CloseButton onClick={closeAModal}>닫기</CloseButton>
      </Wrapper>
    </Modal>
  );
};

export const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  padding: 0 15px;
  width: 22rem;
  height: 120px;
`;

export const Text = styled.p`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.black};
    ${fonts.largeBold}
    margin-bottom: 20px;
  `}
`;

export const CloseButton = styled.button`
  ${flexCenter}
  width: 100%;
  height: 30px;
  border-radius: 4px;
  background: #ff5c21;
`;

export default FileRegistrationFailedModal;
