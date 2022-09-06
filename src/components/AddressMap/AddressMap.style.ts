import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 8.5;
`;

export const BackBtn = styled.button`
  ${({ theme: { defaultHeaderHeight } }) => css`
    height: ${defaultHeaderHeight}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    max-width: 50px;
    position: absolute;
    left: 1rem;
    z-index: 2;
  `}
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const LocationDescription = styled.div`
  ${({ theme: { fonts, colors, defaultPadding } }) => css`
    ${defaultPadding};

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1.5;
    padding-top: 1.5rem;

    > :nth-child(1) {
      ${fonts.xLarge};
    }

    > :nth-child(2) {
      ${fonts.mediumRegular};
      color: ${colors.grey4};
    }
  `}
`;
