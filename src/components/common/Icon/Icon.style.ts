import SVG from 'react-inlinesvg';
import styled, { css } from 'styled-components';

export type IconSizeType = 'SMALL' | 'LARGE' | number;

type StyledIconProps = {
  size: IconSizeType;
};

const sizeStyles = css<StyledIconProps>`
  ${({ size }) =>
    size === 'SMALL' &&
    css`
      width: 1rem;
    `}

  ${({ size }) =>
    size === 'LARGE' &&
    css`
      width: 2rem;
    `}

    ${({ size }) =>
    typeof size === 'number' &&
    css`
      width: ${`${size}rem`};
    `}
`;

export const Icon = styled(SVG)<StyledIconProps>`
  cursor: pointer;
  flex-shrink: 0;
  ${sizeStyles}
`;
