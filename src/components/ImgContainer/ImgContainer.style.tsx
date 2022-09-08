import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

type ImgWrapperPropsType = {
  isImgRatioBigger: boolean;
  imgWrapperRatio: number;
  imgWrapperWidth: string;
  gapBetweenCenter: number;
  additionalStyle?: FlattenSimpleInterpolation;
};

export const Wrapper = styled.div<ImgWrapperPropsType>`
  ${({
    isImgRatioBigger,
    imgWrapperRatio,
    imgWrapperWidth,
    gapBetweenCenter,
    additionalStyle,
  }) => css`
    border-radius: 0.5rem;
    width: ${imgWrapperWidth};
    overflow: hidden;
    aspect-ratio: ${imgWrapperRatio};

    ${isImgRatioBigger &&
    css`
      img {
        height: 100%;
        margin-left: ${gapBetweenCenter}px;
      }
    `}

    ${!isImgRatioBigger &&
    css`
      img {
        width: 100%;
        margin-top: -${gapBetweenCenter}px;
      }
    `} 
    
    ${additionalStyle};
  `}
`;
