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
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.xLarge}
    color:${colors.white0};
    position: absolute;
    width: 100%;
    text-align: center;
  `}
`;

export const Icons = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    path {
      stroke: ${colors.white0};
    }
  `}
`;
