import styled, { css } from 'styled-components';

import { flexBetween, flexCenter, tagStyle } from '@styles/mixin';

export const ContentsContainer = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding}
    border-radius: 1rem 1rem 0 0;
    padding-top: 1.7rem;
    margin-top: -1rem;
    background-color: ${colors.white1};
    box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.08);
    z-index: 0;
  `}
`;

export const IconsWrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding}
    ${flexBetween}
    z-index: 2;
    width: 100%;
    position: sticky;
    top: 0;
    height: 3.25rem;

    path {
      stroke: ${colors.grey6};
    }
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
    gap: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: solid 1px ${colors.grey1};
  `}
`;

export const BadgeWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  text-align: center;
  flex-wrap: wrap;
`;

export const Badge = styled.div`
  ${tagStyle}
`;

export const CreateTime = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.grey7};
    font-size: 10px;
  `}
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
    padding: 0.375rem 0.5rem;
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
      font-weight: 500;
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

export const NoMap = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular};
    ${flexCenter};
    height: 100%;
    color: ${colors.white0};
    background-color: ${colors.grey7};
  `}
`;
