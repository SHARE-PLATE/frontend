import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  overflow: hidden;
  justify-content: space-between;
`;

export const Container = styled.div<{ isSingle?: boolean }>`
  ${({ isSingle = false }) => css`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: 40rem) {
      width: ${!isSingle && '48%'};
    }
  `}
`;

export const ImgWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  min-width: 6.6rem;
  width: 6.6rem;
  overflow: hidden;
  aspect-ratio: 1 / 1;
`;

export const ListInfo = styled.div<{ isSingle?: boolean }>`
  ${({ isSingle }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-wrap: break-word;
    padding: 0.2rem;
    gap: 0.4rem;
    margin-left: 0.37rem;
    flex-grow: 1;
    overflow: hidden;
    /* max-width: ${isSingle ? '65%' : '55%'}; */
  `}
`;

export const ListInfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.4rem;
  width: 100%;
`;

export const Title = styled.h3`
  ${({ theme: { fonts } }) => css`
    ${fonts.mediumRegular}
    width: 100%;
    line-height: 20px;
    letter-spacing: -0.3px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: keep-all;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `}
`;

export const Location = styled.span`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallRegular}
    color: ${colors.grey4};
  `}
`;

export const Cost = styled.span`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.smallBold}
    display: flex;
    gap: 0.2rem;
    align-items: center;

    > :nth-child(2) {
      ${fonts.xSmallRegular}
      text-decoration: line-through;
      color: ${colors.grey4};
    }
  `}
`;

export const IconContainer = styled.div``;

export const KebabMenuWrapper = styled.div`
  margin-top: 0.2rem;
`;

export const NoListWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    ${flexCenter};
    width: 100%;
    height: 100px;
    color: ${colors.grey7};
  `}
`;
