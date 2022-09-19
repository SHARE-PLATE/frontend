import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isShowed: boolean }>`
  ${({ isShowed }) => css`
    display: ${isShowed ? 'flex' : 'none'};
    height: auto;
    min-width: 2rem;
    justify-content: right;
    align-items: center;
  `}
`;
