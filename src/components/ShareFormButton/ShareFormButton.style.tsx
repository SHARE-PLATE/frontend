import styled, { css } from 'styled-components';

type WrapperPropsType = { isShareFormButton: boolean };

export const Wrapper = styled.div<WrapperPropsType>`
  ${({ isShareFormButton }) => css`
    position: relative;
    ${isShareFormButton &&
    css`
      animation: fadeout 0.2s forwards;
      pointer-events: none;
    `}

    ${!isShareFormButton &&
    css`
      animation: fadein 0.2s forwards;
    `}
  `}
`;

export const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white1};
  position: absolute;
  width: 130px;
  height: 80px;
  bottom: 65px;
  right: 0px;
  border-radius: 8px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ButtonWrapper = styled.button`
  ${({ theme: { fonts } }) => css`
    ${fonts.small}
    display: flex;
    width: 100%;
    align-items: center;
    padding-left: 0.6rem;
    gap: 0.4rem;
  `}
`;

export const FormButtonAdditionalStyle = css`
  svg {
    filter: drop-shadow(2px 4px 8px #ff453a50);
  }
`;
