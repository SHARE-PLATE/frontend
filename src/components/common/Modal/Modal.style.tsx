import styled, { css } from 'styled-components';

export type PositionType = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

type ModalContainerPropsType = {
  position: PositionType;
  isFull?: boolean;
};

export const ModalContainer = styled.div<ModalContainerPropsType>`
  ${({ position: { top, right, bottom, left }, isFull, theme: { defaultWidth } }) => css`
    position: absolute;
    z-index: 5;
    /* box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05); */
    /* background: #e0e0e0; */

    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};

    ${isFull &&
    css`
      ${defaultWidth};
      width: 100%;
      height: 100%;
    `}
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
