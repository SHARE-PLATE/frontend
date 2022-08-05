import styled, { css } from 'styled-components';

export const NavigationBarWrapper = styled.div`
  ${({ theme: { defaultWidth, colors } }) => css`
    position: fixed;
    display: flex;
    justify-content: space-around;
    padding: 0.4rem;
    color: ${colors.grey4};
    background-color: ${colors.white1};
    box-shadow: 0px -10px 40px #67676740;
    width: 100%;
    ${defaultWidth};
    height: 7%;
    max-height: 60px;
    bottom: 0;
  `}
`;

export const NavigationBarBtn = styled.button<{ isSelected: boolean }>`
  ${({ theme: { colors, fonts }, isSelected }) => css`
    transition: all 0.3s;
    color: ${colors.grey4};
    ${fonts.small};
    ${isSelected &&
    css`
      color: ${colors.black};
      path {
        transition: all 0.3s;
        stroke: ${colors.black};
      }
    `}
  `}

  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
