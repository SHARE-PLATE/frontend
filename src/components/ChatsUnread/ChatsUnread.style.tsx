import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div<{ isShowed: boolean }>`
  ${({ theme: { colors }, isShowed }) => css`
    ${flexCenter};

    display: ${!isShowed && 'none'};
    font-size: 8px;
    color: ${colors.white0};
    background-color: ${colors.orange2};
    border-radius: 10rem;
    width: 1rem;
    height: 1rem;
    top: -6px;
    left: 12px;
    position: absolute;
  `}
`;