import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const ImgContainerRatio = 1.125 / 1;

export const Wrapper = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  justify-content: center;
  width: 100%;
  aspect-ratio: ${ImgContainerRatio};
  overflow: hidden;
`;

export const IconsWrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding}
    ${flexBetween}
    z-index: 2;
    width: 100%;
    height: 3.25rem;

    path {
      stroke: ${colors.grey6};
    }
  `}
`;
