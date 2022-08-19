import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: right;
    height: ${defaultHeaderHeight};
  `}
`;

export const Title = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.xLarge};
    position: absolute;
    text-align: center;
    width: 100%;
  `}
`;
