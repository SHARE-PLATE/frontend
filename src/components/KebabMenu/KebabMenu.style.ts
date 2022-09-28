import styled, { css } from 'styled-components';

export type KebabMenuWrapperType = 'delivery' | 'ingredient';

export const KebabMenuWrapper = styled.div<{ type: KebabMenuWrapperType }>`
  ${({ type }) =>
    type === 'delivery' &&
    css`
      top: 0.375rem;
      right: 0.375rem;
    `}
  ${({ type }) =>
    type === 'ingredient' &&
    css`
      margin-top: 0.2rem;
    `}
`;
