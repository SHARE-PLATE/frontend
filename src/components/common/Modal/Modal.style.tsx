import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { navigationBarHeight } from '@components/NavigationBar/NavigationBar.style';

export type ModalType = 'center' | 'underRight' | 'bottom';

export type ModalContainerPropsType = {
  type: ModalType;
  customedStyle?: FlattenSimpleInterpolation;
};

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
      z-index: 200;
      visibility: visible;
      background-color: rgba(0, 0, 0, 0.2);
    `};
  `}
`;

export const ModalContainer = styled.div<ModalContainerPropsType>`
  ${({ type, customedStyle, theme: { colors } }) => css`
    position: absolute;
    z-index: 201;
    border-radius: 8px;
    ${type === 'center' &&
    css`
      background-color: ${colors.white1};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `};
    ${type === 'underRight' &&
    css`
      right: 1rem;
      bottom: ${`calc(${navigationBarHeight} + 1rem)`};
    `};
    ${type === 'bottom' &&
    css`
      width: 100%;
      left: 0;
      bottom: 1.5rem;
    `};
    ${customedStyle};
  `}
`;
