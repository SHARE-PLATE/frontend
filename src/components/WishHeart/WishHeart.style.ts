import styled, { css } from 'styled-components';

export type HeartWrapperType = 'delivery' | 'ingredient';

export const HeartWrapper = styled.div<{ type: HeartWrapperType; isEmptyHeart: boolean }>`
  ${({ type }) =>
    type === 'delivery' &&
    css`
      top: 0.375rem;
      right: 0.375rem;
    `}
  ${({ type }) =>
    type === 'ingredient' &&
    css`
      margin-top: 0.4rem;
    `}
    ${({ isEmptyHeart }) =>
    isEmptyHeart &&
    css`
      svg {
        fill: ${({ theme }) => theme.colors.pink0};
      }
      path {
        stroke: ${({ theme }) => theme.colors.pink0};
      }
    `}
`;
