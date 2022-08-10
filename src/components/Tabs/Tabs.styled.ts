import styled from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${flexCenter}
  margin-top: 12px;
  width: 100%;
`;

export const TabMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .tabMenu {
    position: relative;
    border-bottom: 5px solid gray;
    cursor: pointer;
    padding-bottom: 10px;
    width: 100%;
    text-align: center;

    &::after {
      position: absolute;
      bottom: -5px;
      transition: 0.5s ease-out;
      background: #ff5c21;
      width: 100%;
      height: 5px;
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
`;
