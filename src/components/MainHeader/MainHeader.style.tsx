import styled from 'styled-components';

import { flexBetween } from '@styles/mixin';
import theme from '@styles/theme';

export const Wrapper = styled.div`
  ${flexBetween}
  ${theme.defaultPadding}
  ${theme.defaultWidth}
  position: absolute;
  z-index: 2;
  background-color: #ffffff5e;
  width: 100%;
  height: 3rem;
`;

export const IconWrapper = styled.div``;

export const HeaderAddressWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
`;
