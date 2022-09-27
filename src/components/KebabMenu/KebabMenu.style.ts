import styled, { css } from 'styled-components';

export type KebabMenuWrapperType = 'delivery' | 'ingredient';

export const KebabMenuWrapper = styled.div<{ type: KebabMenuWrapperType }>`
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
      top: 0;
      right: 0;
    `}
`;
