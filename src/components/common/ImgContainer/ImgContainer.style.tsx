import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export type SamePartType = 'WIDTH' | 'HEIGHT' | null;

type ImgWrapperPropsType = {
  samePart: SamePartType;
  imgWrapperRatio: number;
  imgWrapperWidth: string;
  noAlign?: boolean;
  borderRadius?: string;
  gapBetweenCenter?: number;
  additionalStyle?: FlattenSimpleInterpolation;
};

export const Wrapper = styled.div<ImgWrapperPropsType>`
  ${(P) => css`
    width: ${P.imgWrapperWidth};
    aspect-ratio: ${P.imgWrapperRatio};
    border-radius: ${P.borderRadius};
    overflow: hidden;
    opacity: 0;

    ${P.noAlign &&
    css`
      opacity: 1;
    `}

    ${P.gapBetweenCenter !== undefined &&
    css`
      transition: 0.3s all;
      opacity: 1;
    `}

    img {
      ${P.samePart === 'HEIGHT' &&
      css`
        height: 100%;
        margin-left: ${P.gapBetweenCenter}px;
      `}

      ${P.samePart === 'WIDTH' &&
      css`
        width: 100%;
        margin-top: -${P.gapBetweenCenter}px;
      `}
    }

    ${P.additionalStyle};
  `}
`;
