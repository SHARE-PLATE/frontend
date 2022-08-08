import styled from 'styled-components';

import { flexBetween } from '@styles/mixin';
import theme from '@styles/theme';

export const Wrapper = styled.div`
  ${flexBetween};
  ${theme.defaultPadding};
  ${theme.defaultWidth};
  width: 100%;
  position: absolute;
  z-index: 2;
  height: 3rem;
  background-color: #ffffff5e;
`;

export const IconWrapper = styled.div``;

export const HeaderAddressWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;
