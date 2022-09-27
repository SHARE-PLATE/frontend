import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 50%;

  @media (max-width: 27rem) {
    width: 100%;
    max-width: 24rem;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;

  min-width: 5rem;
  overflow: hidden;
  aspect-ratio: 1 / 1;

  @media (max-width: 27rem) {
    min-width: 6.6rem;
  }
`;

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem;
  overflow-wrap: break-word;
  gap: 0.4rem;
  max-width: 55%;

  @media (max-width: 27rem) {
    max-width: 65%;
  }
`;

export const ListInfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.4rem;
  width: 12.5rem;
`;

export const Title = styled.h3`
  ${({ theme: { fonts } }) => css`
    ${fonts.mediumRegular}
    width: 88%;
    height: 42px;
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
