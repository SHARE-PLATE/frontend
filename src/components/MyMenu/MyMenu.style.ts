import styled from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const Wrapper = styled.ul`
  ${flexBetween}
  margin: 30px 20px;
`;

export const Menu = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 33%;
  padding: 12px;

  ::after {
    content: '|';
    position: absolute;
    left: 100px;
    top: 30px;
  }

  :last-child::after {
    content: '';
  }

  svg {
    margin: 0px auto;
    margin-bottom: 8px;
  }
`;

export const Content = styled.p`
  text-align: center;
  font-weight: bold;
`;
