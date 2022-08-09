import styled from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${flexCenter}
  width: 100%;
  margin-top: 12px;
`;

export const TabMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .tabMenu {
    border-bottom: 5px solid gray;
    position: relative;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      bottom: -5px;
      height: 5px;
      background: #ff5c21;
      transition: 0.5s ease-out;
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
`;
