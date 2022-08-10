import styled, { css } from 'styled-components';

import { BUTTON_SIZE } from '@components/common/Button/constants';

interface SizeStylesType {
  size: string;
}

interface ActiveStylesType {
  active: boolean;
}

const activeStyles = css<ActiveStylesType>`
  ${({ active, theme: { colors } }) =>
    active &&
    css`
      background-color: ${colors.orange2};
    `}

  ${({ active }) => !active && css``}
`;

const sizeStyles = css<SizeStylesType>`
  ${({ size }) =>
    size === BUTTON_SIZE.SMALL &&
    css`
      border-radius: 20px;
      width: 59px;
      height: 30px;
      font-size: 12px;
    `}

  ${({ size }) =>
    size === BUTTON_SIZE.LARGE &&
    css`
      border-radius: 20px;
      width: 175px;
      height: 53px;
      font-size: 16px;
    `}
`;

export const Button = styled.button<SizeStylesType & ActiveStylesType>`
  ${sizeStyles}
  ${activeStyles}
  
  margin: 6px;
  border: 1px solid #000;
  &:disabled {
    opacity: 0.5;
  }
`;
