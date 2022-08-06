import styled, { css } from 'styled-components';

import { MODAL_POSITION } from '@components/common/Modal';

const positionStyles = css<{ position: string }>`
  ${({ position }) =>
    position === MODAL_POSITION.RIGHT &&
    css`
      right: 0;
    `}

  ${({ position }) =>
    position === MODAL_POSITION.CENTER &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}
`;

export const ModalContainer = styled.div<{ position: string }>`
  position: absolute;
  margin-top: 40px;
  background: #e0e0e0;
  box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05);
  border-radius: 10px;
  z-index: 5;

  /* 포지션 */
  ${positionStyles}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
