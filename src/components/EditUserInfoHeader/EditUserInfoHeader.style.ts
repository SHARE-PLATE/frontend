import styled, { css } from 'styled-components';

import { flexBetween, flexCenter } from '@styles/mixin';

export const HeaderWrapper = styled.div`
  ${flexBetween}
  height: 52px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.xLarge}
  font-weight: 500;
`;

export const ButtonWrapper = styled.button<{ position: 'left' | 'right' }>`
  width: 30px;
  ${({ position }) => css`
    ${flexCenter};
    justify-content: ${position};
  `}
`;

export const SubmitBtn = styled.button`
  ${({ theme }) => theme.fonts.largeRegular}
`;
