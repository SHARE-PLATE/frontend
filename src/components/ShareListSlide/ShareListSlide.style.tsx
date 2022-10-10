import styled, { css } from 'styled-components';

import { noScrollBar } from '@styles/mixin';

const slidePositionHeight = {
  // icon wrapper height + title height = 68px
  bottom: '68px',
  middle: '50%',
  top: '100%',
};

export type SlidePositionType = keyof typeof slidePositionHeight;

export const Wrapper = styled.div<{ slidePositionType: SlidePositionType }>`
  ${({ theme: { colors }, slidePositionType }) => css`
    ${noScrollBar};

    touch-action: none;
    z-index: 100;
    transition: all 0.3s;
    padding-bottom: 1.5rem;
    background-color: ${colors.white1};
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(100% - ${slidePositionHeight[slidePositionType]});
    box-shadow: 0px -6px 12px rgba(0, 0, 0, 0.08);
    border-radius: 8px 8px 0px 0px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: ${slidePositionHeight[slidePositionType]};
  `}
`;

// set height 30spx
export const IconWrapper = styled.div<{ isActive: boolean }>`
  ${({ theme: { colors }, isActive }) => css`
    background-color: ${colors.white1};
    padding: 12px 0;
    top: 0;
    z-index: 2;
    position: sticky;
    transition: 0.3s all;

    rect {
      fill: ${isActive ? colors.grey3 : colors.orange2};
    }
  `}
`;

// set height 38px
export const Title = styled.h1`
  ${({ theme: { fonts, defaultPadding } }) => css`
    ${fonts.largeBold}
    ${defaultPadding}

    padding-bottom: 22px;
  `}
`;

export const ListContent = styled.div`
  ${({ theme: { defaultPadding } }) => defaultPadding};
`;
