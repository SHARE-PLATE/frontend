import styled, { css } from 'styled-components';

export const BottomBarWrapper = styled.div`
  ${({ theme: { defaultWidth } }) => css`
    ${defaultWidth}
    position: fixed;
    bottom: 0;
    box-shadow: 0px -10px 40px #67676740;
    width: 100%;
  `}
`;

export const BottomBarArea = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white1};
    padding-top: 1rem;
    height: 5rem;
  `}
`;
