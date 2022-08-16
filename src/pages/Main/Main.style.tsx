import styled, { css } from 'styled-components';

import { defaultPageStyle } from '@styles/mixin';

export const MainWrapper = styled.div`
  ${defaultPageStyle}
`;

export const MainHeaderWrapper = styled.div`
  padding: 0;
`;

export const HeaderBarWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.defaultWidth};
    position: absolute;
    z-index: 2;
    background-color: #ffffff3c;
    width: 100%;
  `}
`;
