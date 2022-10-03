import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  > svg {
    height: 13.5px;
  }
`;

export const Content = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallLight};
    ${flexBetween}
    border-radius: 0.25rem;
    background-color: ${colors.orange2};
    height: 1.125rem;
    width: 2.375rem;
    padding: 0 0.375rem;
    color: ${colors.white1};

    > :first-child {
      ${fonts.xSmallBold}
      font-weight: 400;
    }
  `}
`;
