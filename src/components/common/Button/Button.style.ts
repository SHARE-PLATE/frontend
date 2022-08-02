import styled, { css } from 'styled-components';

import { BUTTON_SIZE } from '@components/common/Button/constants';

interface SizeStylesType {
  size: string;
}

const sizeStyles = css<SizeStylesType>`
  ${({ size }) =>
    size === BUTTON_SIZE.SMALL &&
    css`
      width: 59px;
      height: 40px;
      font-size: 12px;
      border-radius: 20px;
    `}

  ${({ size }) =>
    size === BUTTON_SIZE.LARGE &&
    css`
      width: 175px;
      height: 53px;
      font-size: 16px;
      border-radius: 20px;
    `}
`;

export const Button = styled.button<SizeStylesType>`
  border: 1px solid #000;
  margin: 6px;
  &:disabled {
    opacity: 0.5;
  }

  ${sizeStyles}
`;
