import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  width: 48%;
  min-width: 9.5rem;
  max-width: 14rem;
  height: 9.7rem;
`;

export const ImgWrapper = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  height: 6.9rem;
  overflow: hidden;

  img {
    margin-top: -25%;
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    > :nth-child(2) {
      ${fonts.smallBold}
    }
  `}
`;
