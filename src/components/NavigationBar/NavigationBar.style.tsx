import styled, { css } from 'styled-components';

const NavigationBarHeight = '3.5rem';

export const NavigationBarWrapper = styled.div`
  ${({ theme: { defaultWidth, colors } }) => css`
    ${defaultWidth}
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    box-shadow: 0px -10px 40px #67676740;
    background-color: ${colors.white1};
    padding: 0.6rem;
    width: 100%;
    height: ${NavigationBarHeight};
    color: ${colors.grey4};
  `}
`;

export const NavigationBarBtn = styled.button<{ isSelected: boolean }>`
  ${({ theme: { colors, fonts }, isSelected }) => css`
    transition: all 0.3s;
    color: ${colors.grey4};
    ${fonts.small}
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
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
`;

export const NavigationArea = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white1};
    height: ${NavigationBarHeight};
  `}
`;
