import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

export type TitleHeaderSizeType = 'MEDIUM' | 'LARGE';

type TitleHeaderPropsType = { size: TitleHeaderSizeType };

export const TitleContainer = styled.div<TitleHeaderPropsType>`
  ${({ size }) => css`
    ${size === 'MEDIUM' &&
    css`
      padding-top: 1rem;
    `}
    ${size === 'LARGE' &&
    css`
      padding-top: 2rem;
    `}

    display: flex;
    flex-flow: row wrap;
  `}
`;

export const TitleHeader = styled.span<TitleHeaderPropsType>`
  ${({ theme: { fonts }, size }) => css`
    ${size === 'MEDIUM' && fonts.largeBold}
    ${size === 'LARGE' && fonts.xLargeBold}
    ${flexBetween}
    width: 100%;
  `}
`;

export const OptionButton = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small}
    color: ${colors.grey4};
    font-weight: 500;
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
