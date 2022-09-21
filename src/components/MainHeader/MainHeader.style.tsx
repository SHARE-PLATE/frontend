import styled, { css } from 'styled-components';

import { flexBetween, flexCenter } from '@styles/mixin';

type IconsWrappersPropsType = {
  position: 'left' | 'space-between' | 'right';
};

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, defaultWidth, defaultHeaderHeight } }) => css`
    ${flexBetween}
    ${defaultPadding}
    ${defaultWidth}

    width: 100%;
    height: ${defaultHeaderHeight}rem;
  `}
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

export const Header = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.xLarge};
    ${flexCenter}
    flex-grow: 1;
    height: 100%;
  `}
`;
