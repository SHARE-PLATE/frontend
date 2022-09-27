import styled, { css } from 'styled-components';

export type HeartWrapperType = 'delivery' | 'ingredient';

export const HeartWrapper = styled.div<{ type: HeartWrapperType }>`
  position: absolute;
  ${({ type }) =>
    type === 'delivery' &&
    css`
      top: 0.375rem;
      right: 0.375rem;
    `}
  ${({ type }) =>
    type === 'ingredient' &&
    css`
      top: 0.3rem;
      right: 0;
    `}
`;
