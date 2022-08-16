import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-basis: 0;
  gap: 0.75rem;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  width: 7rem;
  overflow: hidden;
  aspect-ratio: 1 / 1;

  img {
    margin-top: -25%;
    margin-left: -25%;
    width: 150%;
  }
`;

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem;
  width: 12.7rem;
  overflow-wrap: break-word;
`;

export const ListInfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Title = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Location = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmall}
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
