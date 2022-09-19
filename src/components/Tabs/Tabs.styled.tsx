import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

type WrapperPropsType = {};

type TabWrapperPropsType = {
  active: boolean;
};

export const tabsHeight = '2.6rem';
export const tabsGap = '1.25rem';
export const tabsGapPx = 20;

export const Wrapper = styled.div<WrapperPropsType>`
  display: flex;
  position: relative;
  justify-content: flex-start;
  height: ${tabsHeight};
  gap: ${tabsGap};
`;

export const TabWrapper = styled.div<TabWrapperPropsType>`
  ${({ theme: { colors, fonts }, active }) => css`
    ${flexCenter}
    ${active ? fonts.largeBold : fonts.large};

    position: relative;
    cursor: pointer;
    height: 100%;
    transition: 0.3s ease-out;
    color: ${!active && colors.grey2};

    ::after {
      position: absolute;
      transition: 0.3s all;
      width: 100%;
      border-bottom: solid 0.125rem ${active ? colors.orange2 : 'transparent'};
      height: 2.6rem;
      content: '';
      pointer-events: none;
    }
  `}
`;
