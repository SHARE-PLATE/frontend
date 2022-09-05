import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    height: ${defaultHeaderHeight}rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: left;

    svg {
      position: absolute;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme: { fonts } }) => fonts.xLarge}
  text-align: center;
  margin: 0 auto;
`;
