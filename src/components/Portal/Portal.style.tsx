import styled, { css } from 'styled-components';

type PortalBackgroundPropsType = {
  isPortal: boolean;
};

export const PortalBackground = styled.div<PortalBackgroundPropsType>`
  width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  inset: 0;
  background-color: #00000040; // 투명도 조절 필요
  justify-content: center;
  align-items: center;

  animation: fadein 0.5s;
  ${({ isPortal }) =>
    !isPortal &&
    css`
      animation: fadeout 0.5s;
    `}
`;

export const PortalCloseButton = styled.button`
  position: absolute;
  left: 2rem;
  top: 2rem;
  width: 8%;
  height: 8%;
`;

export const PortalContent = styled.div`
  position: relative;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 2rem;
  padding: 2rem;
  width: 30%;
  height: 25%;
  min-width: 300px;
  min-height: 300px;
`;
