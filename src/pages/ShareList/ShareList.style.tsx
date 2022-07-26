import styled, { css } from 'styled-components';

import { categoryButtonHeight } from '@components/CategoryButton/CategoryButton.style';
import { tabsHeight } from '@components/Tabs/Tabs.styled';
import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle};
`;

export const ListHeader = styled.header<{ isTop: boolean }>`
  ${({ theme, isTop }) =>
    css`
      ${theme.defaultWidth}

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

      transition: all 0.3s;
      ${!isTop &&
      css`
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.12);
      `}
    `}
`;

export const TabsWrapper = styled.div`
  ${({ theme: { defaultPadding } }) => defaultPadding}
`;

export const ListContent = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    padding-top: calc(${defaultHeaderHeight}rem + ${tabsHeight} + ${categoryButtonHeight});
  `}
`;
