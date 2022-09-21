import styled, { css } from 'styled-components';

type WrapperPropsType = { isShareFormOrProfile: boolean };

export const Wrapper = styled.div<WrapperPropsType>`
  ${({ isShareFormOrProfile }) => css`
    position: relative;
    ${isShareFormOrProfile &&
    css`
      animation: fadeout 0.2s forwards;
      pointer-events: none;
    `}

    ${!isShareFormOrProfile &&
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
    /* height: 50%; */
  `}
`;

export const FormBtnWrapper = styled.div`
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #ff4a40;
  box-shadow: 2px 4px 8px #ff453a50;
`;
