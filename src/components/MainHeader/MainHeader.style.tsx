import styled from 'styled-components';

import { flexBetween } from '@styles/mixin';
import theme from '@styles/theme';

export const mainHeaderHeight = '3rem';

export const Wrapper = styled.div`
  ${flexBetween}
  ${theme.defaultPadding}
  ${theme.defaultWidth}
  width: 100%;
  height: ${mainHeaderHeight};
  gap: 1rem;
`;

export const HeaderAddressWrapper = styled.div``;
