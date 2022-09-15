import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.button`
  ${({ theme: { colors } }) => css`
    ${flexCenter}
    border-radius: 10rem;
    box-shadow: 2px 4px 8px rgba(255, 69, 58, 0.2);
    background-color: ${colors.orange3};
    height: 3.25rem;
    aspect-ratio: 1 / 1;

    path {
      stroke: ${colors.white1};
    }
  `}
`;

export const SpeechBubbleContainer = styled.div`
  position: absolute;
  width: 8.375rem;
  bottom: 47px;
  right: 0;
  z-index: 3;
`;
