import SVG from 'react-inlinesvg';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { ColorsType } from '@styles/theme';

export type IconSizeType = 'SMALL' | 'LARGE' | number;

interface IconProps {
  size: IconSizeType;
}

interface IconButtonPropsType extends IconProps {
  isSet: boolean;
  color: ColorsType;
  opacity: number;
  borderRadius: string;
  noSkeleton: boolean;
  additionalStyle?: FlattenSimpleInterpolation;
}

const getSize = (size: IconSizeType) => {
  if (typeof size === 'number') return `${size}rem`;
  if (size === 'SMALL') return '1rem';
  if (size === 'LARGE') return '2rem';
};

const sizeStyles = css<IconProps>`
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

export const IconButton = styled.button<IconButtonPropsType>`
  ${({
    isSet,
    color,
    opacity,
    borderRadius,
    size,
    noSkeleton,
    additionalStyle,
    theme: { colors },
  }) =>
    css`
      ${!isSet &&
      !noSkeleton &&
      css`
        opacity: ${opacity};
        height: ${getSize(size)};
        width: ${getSize(size)};
        border-radius: ${borderRadius};
        background-color: ${colors[color]};
      `}

      display: flex;
      align-items: center;
      justify-content: center;
      ${additionalStyle}
    `}
`;

export const Icon = styled(SVG)<IconProps>`
  ${sizeStyles}
  flex-shrink: 0;
  cursor: pointer;
`;
