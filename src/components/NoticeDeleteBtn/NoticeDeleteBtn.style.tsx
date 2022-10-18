import styled, { css } from 'styled-components';

export const Wrapper = styled.button<{ isShowed: boolean }>`
  ${({ isShowed }) => css`
    display: ${isShowed ? 'flex' : 'none'};
    height: auto;
    min-width: 1rem;
    justify-content: right;
  `}
`;
