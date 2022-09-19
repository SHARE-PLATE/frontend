import styled, { css } from 'styled-components';

interface ActiveStylesType {
  active: boolean;
}

export interface SizeStylesType {
  size: 'small' | 'large' | 'bigSize';
}

const activeStyles = css<ActiveStylesType>`
  ${({ active, theme: { colors, fonts } }) =>
    active &&
    css`
      ${fonts.smallBold}
      border-color: ${colors.orange3};
      background-color: ${colors.orange3};
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
      border-radius: 4px;
      font-size: 14px;
    `}

    ${({ size, theme }) =>
    size === 'bigSize' &&
    css`
      ${theme.fonts.mediumBold}
      border-radius: 4px;
      padding: 0.625rem 2.875rem;
    `}
`;

export const Button = styled.button<SizeStylesType & ActiveStylesType>`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular}
    border: 1px solid ${colors.grey3};
    color: ${colors.grey4};
    padding: 0.26rem 0.75rem;
    line-height: 1.12rem;
    transition: 0.3s ease-out;

    &:disabled {
      opacity: 0.5;
    }
  `}
  ${sizeStyles}
  ${activeStyles}
`;
