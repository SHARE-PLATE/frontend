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
