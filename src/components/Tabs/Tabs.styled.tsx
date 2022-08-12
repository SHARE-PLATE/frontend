import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const tabsHeight = '2.6rem';

export const Wrapper = styled.div`
  ${flexCenter}
  width: 100%;
  height: ${tabsHeight};
`;

export const TabMenu = styled.nav`
  ${({ theme: { colors } }) => css`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 0.125rem solid ${colors.grey2};

    .tabMenu {
      height: 100%;
      display: flex;
      position: relative;
      cursor: pointer;
      width: 100%;
      justify-content: center;
      align-items: center;

      &::after {
        position: absolute;
        transition: 0.3s ease-out;
        height: 2.6rem;
        border-bottom: solid 0.125rem ${colors.orange2};
        width: 100%;
        content: '';
      }

      &.delivery::after {
        left: 100%;
      }

      &.ingredient::after {
        left: -100%;
      }

      &.active::after {
        left: 0;
      }
    }
  `}
`;
