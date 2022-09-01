import styled, { css } from 'styled-components';

type ImgWrapperPropsType = {
  isImgRatioBigger: boolean;
  imgWrapperRatio: number;
  imgWrapperWidth: string;
};

export const Wrapper = styled.div<ImgWrapperPropsType>`
  ${({ isImgRatioBigger, imgWrapperRatio, imgWrapperWidth }) => css`
    border-radius: 0.5rem;
    width: ${imgWrapperWidth};
    overflow: hidden;
    aspect-ratio: ${imgWrapperRatio};

    ${isImgRatioBigger &&
    css`
      img {
        height: 100%;
        margin-left: -25%;
      }
    `}

    ${!isImgRatioBigger &&
    css`
      img {
        margin-top: -25%;
        width: 100%;
      }
    `}
  `}
`;
