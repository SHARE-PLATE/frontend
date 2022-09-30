import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const ExpirationDateWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallBold}
    ${flexCenter}
    background-color: ${colors.black};
    color: ${colors.white1};
    flex-direction: column;
    gap: 4px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 0.4rem;
    opacity: 0.6;
    width: 100%;
    height: 100%;
    pointer-events: none;
  `}
`;

export const Text = styled.span`
  ${({ theme: { fonts } }) => css`
    ${fonts.smallBold}
  `}
`;
