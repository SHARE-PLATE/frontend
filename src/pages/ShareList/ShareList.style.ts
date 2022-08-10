import styled from 'styled-components';

import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle};
`;

export const ListHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: 0;
  ${({ theme }) => theme.defaultWidth};

  > :first-child,
  > :last-child {
    padding: 0 1rem;
  }

  background-color: ${({ theme }) => theme.colors.white1};
`;

export const ListContents = styled.div`
  height: 100%;
  padding: 1rem;
  padding-top: 155px;
`;
