import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: right;
    height: ${defaultHeaderHeight}rem;
  `}
`;

export const Title = styled.h2`
  ${({ theme: { fonts } }) => fonts.xLarge}
  position: absolute;
  width: 100%;
  text-align: center;
`;

export const Icons = styled.div`
  display: flex;
`;
