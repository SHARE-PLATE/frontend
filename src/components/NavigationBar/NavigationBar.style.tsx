import styled, { css } from 'styled-components';

export const NavigationBarWrapper = styled.ul`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: space-around;
    background-color: ${colors.white1};
    height: 3.5rem;
    color: ${colors.grey4};
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

export const ShareFormBtnWrapper = styled.div`
  position: absolute;
  top: calc(-3.5rem - 1rem);
  right: 1rem;
`;
