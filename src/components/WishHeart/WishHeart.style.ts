import styled, { css } from 'styled-components';

export type HeartWrapperType = 'delivery' | 'ingredient';

export const HeartWrapper = styled.div<{
  type: HeartWrapperType;
  isEmptyHeart: boolean | undefined;
}>`
  ${({ type }) =>
    type === 'delivery' &&
    css`
      position: absolute;
      top: 0.563rem;
      right: 0.438rem;
    `}
  ${({ type }) =>
    type === 'ingredient' &&
    css`
      margin-top: 0.4rem;
    `}
    ${({ isEmptyHeart }) =>
    !isEmptyHeart &&
    css`
      svg {
        fill: ${({ theme }) => theme.colors.pink0};
      }
      path {
        stroke: ${({ theme }) => theme.colors.pink0};
      }
    `}
`;
