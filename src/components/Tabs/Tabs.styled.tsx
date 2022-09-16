import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

type WrapperPropsType = {
  selectedTabWidth: number;
  selectedTabLeft: number;
};

type TabWrapperPropsType = {
  active: boolean;
};

export const tabsHeight = '2.6rem';
export const tabsGap = '1.25rem';
export const tabsGapPx = 20;

export const Wrapper = styled.div<WrapperPropsType>`
  ${({ theme: { colors }, selectedTabWidth, selectedTabLeft }) => css`
    display: flex;
    position: relative;
    justify-content: flex-start;
    height: ${tabsHeight};
    gap: ${tabsGap};

    ::after {
      position: absolute;
      transition: 0.3s all;
      left: ${selectedTabLeft}px;
      border-bottom: solid 0.125rem ${colors.orange2};
      width: ${selectedTabWidth}px;
      height: 2.6rem;
      content: '';
      pointer-events: none;
    }
  `}
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
  `}
`;
