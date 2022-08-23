import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1.38 / 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const IconsWrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding}
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    width: 100%;
    height: 3.25rem;

    path {
      stroke: ${colors.white1};
    }
  `}
`;
