import styled, { css } from 'styled-components';

export const navigationBarHeight = '3.5rem';

interface CssPropsType {
  isNavBarCondition: boolean;
  isProfile: boolean;
}

export const Wrapper = styled.ul<CssPropsType>`
  ${({ theme: { colors, defaultWidth }, isNavBarCondition, isProfile }) => css`
    ${defaultWidth}
    display: ${isNavBarCondition ? 'flex' : 'none'};
    height: ${isProfile ? 0 : navigationBarHeight};
    background-color: ${colors.white0};
    color: ${colors.grey4};
    position: fixed;
    bottom: 0;
    border-radius: 8px 8px 0 0;
    box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.08);
    width: 100%;
    justify-content: space-around;
  `}
`;

export const NavigationBarBtn = styled.button<{ isSelected: boolean }>`
  ${({ theme: { colors, fonts }, isSelected }) => css`
    transition: all 0.3s;
    color: ${colors.grey4};
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${fonts.small};
    ${isSelected &&
    css`
      color: ${colors.orange2};
    `}
  `}
`;

export const IconWrapper = styled.div<{ isSelected: boolean }>`
  height: 1.2rem;
  position: relative;
  display: flex;
  justify-content: center;

  > * {
    position: absolute;
    path {
      transition: all 0.3s;
    }
  }

  > :nth-child(2) {
    path {
      fill: #ffffff00;
    }
  }

  ${({ isSelected, theme: { colors } }) =>
    isSelected &&
    css`
      > :nth-child(1) {
        path {
          fill: #ffffff00;
        }
      }
      > :nth-child(2) {
        path {
          fill: ${colors.orange2};
        }
      }
    `}
`;
