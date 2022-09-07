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
`;

export const DeliveryButton = styled.button`
  display: flex;
  margin: 11px 12px;
`;

export const IngredientButton = styled.button`
  display: flex;
  margin: 0px 12px;
`;
