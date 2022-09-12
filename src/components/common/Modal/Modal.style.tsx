import styled, { css } from 'styled-components';

import { navigationBarHeight } from '@components/NavigationBar/NavigationBar.style';

export const ModalBackground = styled.div<{ isFull: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s all;
  visibility: hidden;

  ${({ isFull }) => css`
    ${isFull &&
    css`
      visibility: visible;
      background-color: rgba(0, 0, 0, 0.2);
    `};
  `}
`;

export const ModalContainer = styled.div<{ type: string }>`
  ${({ type, theme: { colors } }) => css`
    position: absolute;
    z-index: 2;

    ${type === 'center' &&
    css`
      background-color: ${colors.white1};
      top: 27%;
    `};
    ${type === 'underRight' &&
    css`
      right: 1rem;
      bottom: ${`calc(${navigationBarHeight} + 1rem)`};
    `};
  `}
`;
