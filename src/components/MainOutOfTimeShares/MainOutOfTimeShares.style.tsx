import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  > :first-child {
    padding-left: 1rem;
  }
`;

export const ErrorWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    ${flexCenter}
    text-align: center;
    height: 10rem;
    line-height: 1.5rem;
    white-space: pre;
    color: ${colors.grey4};
  `}
`;
