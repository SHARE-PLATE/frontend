import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';
import theme from '@styles/theme';

type IconsWrappersPropsType = {
  position: 'left' | 'space-between';
};

export const mainHeaderHeight = '3rem';

export const Wrapper = styled.div`
  ${flexBetween}
  ${theme.defaultPadding}
  ${theme.defaultWidth}

  width: 100%;
  height: ${mainHeaderHeight};
`;

export const HeaderAddressWrapper = styled.div``;

export const IconsWrapper = styled.div<IconsWrappersPropsType>`
  ${({ position }) => css`
    display: flex;
    align-items: center;
    justify-content: ${position};
    width: 3.625rem;
  `}
`;
