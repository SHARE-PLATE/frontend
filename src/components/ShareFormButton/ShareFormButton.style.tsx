import styled, { css } from 'styled-components';

type WrapperPropsType = { isShareForm: boolean };

export const Wrapper = styled.div<WrapperPropsType>`
  ${({ theme: { colors }, isShareForm }) => css`
    ${isShareForm &&
    css`
      animation: fadeout 0.2s forwards;
      pointer-events: none;
    `}

    ${!isShareForm &&
    css`
      animation: fadein 0.2s forwards;
    `}
  
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rem;
    box-shadow: 0 4px 10px #4b4b4b40, 0 0 4px #4b4b4b40;
    background-color: ${colors.orange2};
    height: 3.5rem;
    aspect-ratio: 1 / 1;
    position: relative;
  `}
`;

export const IngredientButton = styled.button`
  position: absolute;
  top: -40px;
  left: 0px;
`;
export const DeliveryButton = styled.button`
  position: absolute;
  top: -20px;
  left: 0px;
`;
