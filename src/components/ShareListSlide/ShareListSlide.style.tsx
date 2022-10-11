import styled, { css } from 'styled-components';

import { flexCenter, noScrollBar } from '@styles/mixin';

const slidePositionHeight = {
  // icon wrapper height + title height = 68px
  bottom: '68px',
  middle: '50%',
  top: '100%',
  clicked: '280px',
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
    left: 50%;
    transform: translate(-50%);
    box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 8px 8px 0px 0px;
    overflow-y: scroll;
    width: 100%;
    max-width: ${slidePositionType !== 'clicked' ? '' : '400px'};
    scroll-behavior: smooth;
    height: ${slidePositionHeight[slidePositionType]};
  `}
`;

// set height 30spx
export const IconWrapper = styled.div<{ isBottom: boolean }>`
  ${({ theme: { colors }, isBottom }) => css`
    background-color: ${colors.white1};
    padding: 12px 0;
    top: 0;
    z-index: 2;
    position: sticky;
    transition: 0.3s all;

    rect {
      fill: ${!isBottom ? colors.grey3 : colors.orange2};
    }
  `}
`;

// set height 38px
export const Title = styled.h1<{ isRotated: boolean }>`
  ${({ theme: { colors, fonts, defaultPadding }, isRotated }) => css`
    ${fonts.largeBold}
    ${defaultPadding}

    padding-bottom: 22px;
    display: flex;
    justify-content: left;

    svg {
      ${!isRotated &&
      css`
        display: none;
      `}

      animation: rotate 0.5s infinite;
      margin-left: 0.5rem;
      path {
        stroke: ${colors.black};
      }
    }
  `}
`;

export const CloseClickedShareButton = styled.button`
  ${({ theme: { colors } }) => css`
    ${flexCenter};
    background-color: ${colors.white0};
    width: 100%;
  `}
`;

export const ListContent = styled.div`
  ${({ theme: { defaultPadding } }) => defaultPadding};
`;

export const Error = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumRegular};
    ${flexCenter};

    height: 200px;
    color: ${colors.grey4};
  `}
`;
