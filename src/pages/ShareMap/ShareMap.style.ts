import styled, { css } from 'styled-components';

import { bottomHeight } from '@components/ShareListSlide/ShareListSlide.style';
import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle};
  position: relative;
`;

export const InactiveBackground = styled.div<{ isActive: boolean }>`
  ${({ isActive }) =>
    css`
      animation: fadeout 0.3s;
      position: absolute;
      background-color: #00000040;
      width: 100%;
      height: 100%;
      z-index: 99;
      display: none;
      // share list slide's z-index is 100

      ${isActive &&
      css`
        animation: fadein 0.3s;
      `}
    `}
`;

export const MapListWrapper = styled.div`
  padding: 0 !important;
  display: flex;
  position: relative;
  flex-direction: column;

  // slide z-index is 100
  // share form button background
  > :nth-child(1) {
    z-index: 98;
  }
  // share form button
  > :nth-child(2) {
    z-index: 99;
    bottom: calc(${bottomHeight} + 1rem);
  }
`;

export const ListHeader = styled.header`
  ${({ theme: { colors, defaultWidth } }) => css`
    ${defaultWidth}

    background-color: ${colors.white1};
    padding: 0;

    > :first-child,
    > :last-child {
      padding: 0 1rem;
    }
  `}
`;

export const TabsWrapper = styled.div`
  ${({ theme: { defaultPadding } }) => defaultPadding}
`;

export const CurrentAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2.5rem;
`;

export const AddressText = styled.span`
  ${({ theme: { fonts } }) => css`
    ${fonts.smallRegular}
  `}
`;
