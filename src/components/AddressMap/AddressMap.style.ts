import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  padding: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 10;
`;

export const BackBtn = styled.button`
  ${({ theme: { defaultHeaderHeight } }) => css`
    height: ${defaultHeaderHeight}rem;
    ${flexCenter}
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
    flex-grow: 1;
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

export const FinishBtn = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeBold};

    margin-top: 1.5rem;
    color: ${colors.white1} !important;
    border-radius: 0.25rem;
    background-color: ${colors.orange2};
    width: 100%;
    height: 2.75rem;
  `}
`;
