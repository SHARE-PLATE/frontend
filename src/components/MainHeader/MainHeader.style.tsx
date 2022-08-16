import styled from 'styled-components';

import { flexBetween } from '@styles/mixin';
import theme from '@styles/theme';

export const mainHeaderHeight = '3rem';

export const Wrapper = styled.div`
  ${flexBetween}
  ${theme.defaultPadding}
  ${theme.defaultWidth}

  gap: 1rem;
  width: 100%;
  height: ${mainHeaderHeight};
`;

export const HeaderAddressWrapper = styled.div``;
