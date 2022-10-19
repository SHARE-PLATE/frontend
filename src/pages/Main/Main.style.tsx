import styled, { css } from 'styled-components';

import { defaultPageStyle } from '@styles/mixin';

export const MainWrapper = styled.div`
  ${defaultPageStyle}
`;

export const MainHeaderWrapper = styled.div`
  padding: 0;
  margin-bottom: 6px;
`;

export const HeaderBarWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.defaultWidth}
    z-index: 2;
    width: 100%;
  `}
`;
