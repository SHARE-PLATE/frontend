import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div<{ isShowed: boolean; otherStyle?: FlattenSimpleInterpolation }>`
  ${({ theme: { colors }, isShowed, otherStyle }) => css`
    ${flexCenter};

    width: 100%;
    background-color: ${colors.grey6};
    gap: 0.45rem;
    height: 0;
    overflow: hidden;
    transition: height 0.3s;

    ${isShowed &&
    css`
      height: 2.125rem;
    `}

    ${otherStyle};
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumRegular};
    color: ${colors.white0};
  `}
`;
