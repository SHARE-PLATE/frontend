import styled, { css } from 'styled-components';

import { noScrollBar } from '@styles/mixin';

//index.tsx
export const Wrapper = styled.div`
  padding: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
`;
export const BackGround = styled.div<{ isClicked: boolean }>`
  position: relative;
  width: 100%;
  flex-grow: 10;
  z-index: 2;
  visibility: hidden;

  ${({ isClicked }) =>
    isClicked &&
    css`
      visibility: visible;
      background-color: rgba(0, 0, 0, 0.2);
    `}
`;

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 537px;
  margin-top: 133px;
  flex-grow: 10;
  overflow: hidden;
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

//ShareListSlide.tsx
interface ShareListContainerPropsType {
  curHeight: number;
  maxHeight: number;
}
export const ShareListContainer = styled.div<ShareListContainerPropsType>`
  ${({ theme: { defaultPadding, colors }, curHeight, maxHeight }) => css`
    ${defaultPadding};
    padding-bottom: 1.5rem;
    background-color: ${colors.white1};
    display: flex;
    flex-direction: column;
    position: relative;
    height: ${curHeight}px;
    min-height: 4.375rem;
    max-height: ${maxHeight}px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    ${noScrollBar}
    transition: all 0.3s;
    box-shadow: 0px -6px 12px rgba(0, 0, 0, 0.08);
    border-radius: 8px 8px 0px 0px;
  `}
`;

export const IconContainer = styled.div`
  padding-top: 0.75rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.largeBold}
  line-height: 1.5rem;
  padding: 0.5rem 0 1.375rem 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ListContent = styled.div``;
