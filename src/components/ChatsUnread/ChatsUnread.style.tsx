import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div<{ isShowed: boolean }>`
  ${({ theme: { colors, fonts }, isShowed }) => css`
    ${flexCenter};
    ${fonts.xSmall};

    display: ${!isShowed && 'none'};
    background-color: ${colors.orange4};
    color: ${colors.white0};
    line-height: 1;
    border-radius: 9px;
    padding: 0.2rem 0.375rem;
    min-width: 1.5rem;
    top: -4px;
    left: 12px;
    position: absolute;
  `}
`;
