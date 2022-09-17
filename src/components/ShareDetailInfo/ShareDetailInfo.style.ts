import styled, { css } from 'styled-components';

import { tagStyle } from '@styles/mixin';

export const ContentsContainer = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding}
    border-radius: 1rem 1rem 0 0;
    padding-top: 1.7rem;
    margin-top: -1rem;
    background-color: ${colors.white1};
    box-shadow: 0 -4px 8px #00000015;
    z-index: 0;
  `}
`;

export const Title = styled.h2`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.xLarge}
    line-height: 1.5rem;
    color: ${colors.black};
    font-weight: 500;
  `}
`;

export const UpperInfo = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-top: 0.75rem;
    padding-bottom: 1rem;
    border-bottom: solid 1px ${colors.grey1};
  `}
`;

export const BedgeWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  text-align: center;
`;

export const Bedge = styled.div`
  ${tagStyle}
`;

export const LowerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

export const PersonnelStatusWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium}
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding-bottom: 0.75rem;
  `}
`;

export const CreateTime = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.grey7};
    font-size: 10px;
  `}
`;

export const ImgContentsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const Description = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumRegular};

    display: flex;
    align-items: center;
    border-top: solid 1px ${colors.grey1};
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    line-height: 20px;
    color: ${colors.black};
  `}
`;

export const WishCount = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular};
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: ${colors.grey4};
    padding-bottom: 1.25rem;

    path {
      padding-top: 0.2rem;
      stroke: ${colors.grey3};
    }
  `}
`;

export const Hashtags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding-bottom: 1.5rem;
`;

export const Hashtag = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small};

    color: ${colors.grey4};
    display: flex;
    align-items: center;
    gap: 0.1rem;
    padding: 0.3rem 0.5rem;
    letter-spacing: 0.4px;
    border-radius: 0.25rem;
    background-color: ${colors.grey1};
  `}
`;

export const LocationWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-bottom: 1.25rem;

  > :first-child {
    ${({ theme: { colors } }) => css`
      color: ${colors.grey5};
    `}
  }
`;

export const Location = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumRegular};
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    > :nth-child(1) {
      color: ${colors.grey6};
    }
    > :nth-child(2) {
      color: ${colors.grey5};
    }
  `}
`;

export const MapContainer = styled.div`
  position: relative;
  border-radius: 0.5rem;
  width: 100%;
  overflow: hidden;
  height: 9.4rem;
  margin-bottom: 2rem;
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
