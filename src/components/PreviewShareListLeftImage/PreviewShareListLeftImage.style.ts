import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

export const Container = styled.div<{ isSingle?: boolean }>`
  ${({ isSingle = false }) => css`
    display: flex;
    justify-content: flex-start;
    width: ${isSingle ? '100%' : '50%'};

    @media (max-width: 27rem) {
      width: 100%;
      max-width: 24rem;
    }
  `}
`;

export const ImgWrapper = styled.div<{ isSingle?: boolean }>`
  ${({ isSingle }) => css`
    position: relative;
    border-radius: 0.5rem;

    min-width: ${isSingle ? '6.6rem' : '5rem'};
    overflow: hidden;
    aspect-ratio: 1 / 1;

    @media (max-width: 27rem) {
      min-width: 6.6rem;
    }
  `}
`;

export const ListInfo = styled.div<{ isSingle?: boolean }>`
  ${({ isSingle }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-wrap: break-word;
    padding: 0.2rem;
    gap: 0.4rem;
    margin: 0 0.37rem 0 0.7rem;
    max-width: ${isSingle ? '65%' : '55%'};

    @media (max-width: 27rem) {
      max-width: 65%;
    }
  `}
`;

export const ListInfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.4rem;
  width: 11.375rem;
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
