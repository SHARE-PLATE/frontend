import styled, { css } from 'styled-components';

import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}
`;

export const ContentWrapper = styled.div<{ state: 'hasValue' | 'loading' | 'hasError' }>`
  ${({ state }) =>
    state === 'loading' &&
    css`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
