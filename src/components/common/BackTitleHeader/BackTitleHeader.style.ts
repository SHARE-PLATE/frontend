import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    height: ${defaultHeaderHeight}rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;

    svg {
      position: absolute;
      left: 0;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme: { fonts } }) => fonts.xLarge};
  text-align: center;
  width: 100%;
`;
