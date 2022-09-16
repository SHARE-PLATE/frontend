import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
  width: calc(50% - 1.5rem);

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
  gap: 0.4rem;
`;

export const Title = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.mediumRegular}
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const Location = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallRegular}
    color: ${colors.grey4};
  `}
`;

export const Cost = styled.div`
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

//ExpirationDate.tsx
export const ExpirationDateWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallBold}
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 4px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 0.4rem;
    background-color: ${colors.black};
    opacity: 0.6;
    width: 100%;
    height: 100%;
    color: ${colors.white1};
  `}
`;

export const Text = styled.span`
  ${({ theme: { fonts } }) => css`
    ${fonts.smallBold}
  `}
`;
