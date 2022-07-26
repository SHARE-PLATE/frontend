import styled, { css } from 'styled-components';

import { PortalType } from '@store/portal';

type PortalStylePropsType = {
  isPortal: boolean;
  portalType: PortalType;
};

export const PortalBackground = styled.div<PortalStylePropsType>`
  display: none;
  position: fixed;
  z-index: 1000;
  background-color: #00000040;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: fadein 0.3s;
  inset: 0;

  ${({ isPortal, portalType }) => css`
    ${!isPortal &&
    css`
      animation: fadeout 0.3s;
    `}

    ${(portalType === 'modal' || portalType === 'full') &&
    css`
      align-items: center;
      justify-content: center;
    `}
      
    ${portalType === 'toast' &&
    css`
      justify-content: center;
    `}
  `}
`;

export const PortalContent = styled.div<PortalStylePropsType>`
  ${({ theme: { defaultWidth, colors }, portalType, isPortal }) => css`
    overflow: hidden;

    ${portalType === 'modal' &&
    css`
      position: relative;
      border-radius: 1.5rem;
      box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
      padding: 2.5rem;
      width: 30%;
      min-width: 300px;
      height: 25%;
      min-height: 300px;
    `}

    ${portalType === 'full' &&
    css`
      ${defaultWidth}
      width: 100%;
      height: 100%;
      animation: 'slideout-bottom' 0.3s;
    `}

    ${portalType === 'full' &&
    !isPortal &&
    css`
      animation: 'slidein-bottom' 0.3s;
    `}

    ${portalType === 'sidebar' &&
    css`
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 1.5rem 0 0 1.5rem;
      padding: 2rem;
      width: 60%;
      max-width: 300px;
      height: 100%;
      animation: slideout 0.5s;
    `}

    ${portalType === 'sidebar' &&
    !isPortal &&
    css`
      animation: fadeout 0.5s;
      animation: slidein 0.5s;
    `}

    ${portalType === 'toast' &&
    css`
      ${defaultWidth}
      width: 100%;
      height: 500px;
      position: fixed;
      bottom: 0;
      animation: 'slideout-bottom' 0.3s;
      background-color: ${colors.white0};
      box-shadow: 0px -6px 12px rgba(0, 0, 0, 0.08);
      border-radius: 8px 8px 0 0;
      animation: 'slideout-bottom' 0.3s;

      ${!isPortal &&
      css`
        animation: 'slidein-bottom' 0.3s;
      `}
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
      top: 1rem;
      right: 1rem;
    `}

    ${portalType === 'sidebar' &&
    css`
      top: 0;
      right: 0;
    `}

    ${portalType === 'full' &&
    css`
      top: 1rem;
      left: 1rem;
    `}
  `}
`;
