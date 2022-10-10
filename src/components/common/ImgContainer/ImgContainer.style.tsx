import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export type SamePartType = 'WIDTH' | 'HEIGHT' | null | undefined;

type ImgWrapperPropsType = {
  imgWrapperRatio: number;
  imgWrapperWidth: string;
  isLoaded: boolean;
  borderRadius?: string;
  additionalStyle?: FlattenSimpleInterpolation;
};

export const Wrapper = styled.div<ImgWrapperPropsType>`
  ${(P) => css`
    width: ${P.imgWrapperWidth};
    aspect-ratio: ${P.imgWrapperRatio};
    border-radius: ${P.borderRadius};
    overflow: hidden;
    opacity: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${P.additionalStyle};
  `}
`;
