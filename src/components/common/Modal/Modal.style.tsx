import styled, { css } from 'styled-components';

export const ModalBackground = styled.div<{ isFull: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  ${({ isFull }) => css`
    ${isFull &&
    css`
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 100; !important
    `};
  `}
`;

export const ModalContainer = styled.div<{ type: string }>`
  ${({ type, theme: { colors } }) => css`
    position: absolute;
    border-radius: 8px;

    ${type === 'center' &&
    css`
      background-color: ${colors.white1};
      top: 27%;
    `};
    ${type === 'underRight' &&
    css`
      bottom: 60px;
      right: 10px;
    `};
  `}
`;
