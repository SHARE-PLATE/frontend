import styled, { css } from 'styled-components';

interface ActiveStylesType {
  active: boolean;
}

export interface SizeStylesType {
  size: 'small' | 'large';
}

const activeStyles = css<ActiveStylesType>`
  ${({ active, theme: { colors } }) =>
    active &&
    css`
      border-color: ${colors.orange2};
      background-color: ${colors.orange2};
      color: ${colors.white1};
    `}
`;

const sizeStyles = css<SizeStylesType>`
  ${({ size }) =>
    size === 'small' &&
    css`
      border-radius: 20px;
      font-size: 12px;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      border-radius: 20px;
      font-size: 16px;
    `}
`;

export const Button = styled.button<SizeStylesType & ActiveStylesType>`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular}
    transition: all 0.3s;
    border: 1px solid ${colors.grey3};
    padding: 0.25rem 0.75rem;
    line-height: 1.12rem;
    color: ${colors.grey5};

    &:disabled {
      opacity: 0.5;
    }
  `}
  ${sizeStyles}
  ${activeStyles}
`;
