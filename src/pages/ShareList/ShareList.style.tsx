import styled, { css } from 'styled-components';

import { categoryButtonHeight } from '@components/CategoryButton/CategoryButton.style';
import { tabsHeight } from '@components/Tabs/Tabs.styled';
import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle};
`;

export const ListHeader = styled.header`
  ${({ theme }) => theme.defaultWidth}

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white1};
  padding: 0;
  width: 100%;

  > :first-child,
  > :last-child {
    padding: 0 1rem;
  }
`;

export const ListContent = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    padding-top: calc(${defaultHeaderHeight}rem + ${tabsHeight} + ${categoryButtonHeight});
  `}
`;
