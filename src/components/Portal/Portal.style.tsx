import styled, { css } from 'styled-components';

import { PortalType } from '@store/portal';
import { defaultPageStyle } from '@styles/mixin';
type PortalStylePropsType = {
  isPortal: boolean;
  portalType: PortalType;
};

export const PortalBackground = styled.div<PortalStylePropsType>`
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  inset: 0;
  background-color: #00000040; // 투명도 조절 필요
  animation: fadein 0.3s;

  ${({ isPortal, portalType }) => css`
    ${!isPortal &&
    css`
      animation: fadeout 0.3s;
    `}

    ${(portalType === 'modal' || portalType === 'full') &&
    css`
      justify-content: center;
      align-items: center;
    `}
  `}
`;

export const PortalContent = styled.div<PortalStylePropsType>`
  ${({ theme: { defaultWidth }, portalType, isPortal }) => css`
    ${portalType === 'modal' &&
    css`
      box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
      position: relative;
      border-radius: 1.5rem;
      padding: 2.5rem;
      width: 30%;
      height: 25%;
      min-width: 300px;
      min-height: 300px;
    `}

    ${portalType === 'full' &&
    css`
      ${defaultPageStyle};
      ${defaultWidth};
      animation: 'slideout-bottom' 0.3s;
      width: 100%;
      height: 100%;
    `}

    ${portalType === 'full' &&
    !isPortal &&
    css`
      animation: 'slidein-bottom' 0.3s;
    `}

    ${portalType === 'sidebar' &&
    css`
      animation: slideout 0.5s;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 1.5rem 0 0 1.5rem;
      width: 60%;
      height: 100%;
      max-width: 300px;
      padding: 2rem;
    `}

    ${portalType === 'sidebar' &&
    !isPortal &&
    css`
      animation: fadeout 0.5s;
      animation: slidein 0.5s;
    `}
  `}
`;

export const PortalCloseButton = styled.button<{ portalType: PortalType }>`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;

  ${({ portalType }) => css`
    ${portalType === 'modal' &&
    css`
      right: 1rem;
      top: 1rem;
    `}

    ${portalType === 'sidebar' &&
    css`
      right: 0;
      top: 0;
    `}

    ${portalType === 'full' &&
    css`
      left: 1rem;
      top: 1rem;
    `}
  `}
`;
