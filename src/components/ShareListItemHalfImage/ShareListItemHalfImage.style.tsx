import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  width: 48%;
  min-width: 9.5rem;
`;

export const ImgWrapper = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 1.8 / 1;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 27rem) {
    aspect-ratio: 1.43 / 1;
  }
`;

export const InfoWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding-top: 0.5rem;

    > :nth-child(1) {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > :nth-child(2) {
      ${fonts.smallBold}
    }
  `}
`;
