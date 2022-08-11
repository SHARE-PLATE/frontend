import styled, { css } from 'styled-components';

export const NavigationBarWrapper = styled.ul`
  ${({ theme: { colors } }) => css`
    display: flex;
    height: 3.5rem;
    justify-content: space-around;
    background-color: ${colors.white1};
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

export const ShareFormBtnWrapper = styled.div`
  position: absolute;
  top: calc(-3.5rem - 1rem);
  right: 1rem;
`;
