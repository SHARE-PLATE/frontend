import styled, { css } from 'styled-components';

type WrapperPropsType = { isShareForm: boolean };

export const Wrapper = styled.button<WrapperPropsType>`
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
    box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05);
    background-color: ${colors.orange2};
    height: 3.5rem;
    aspect-ratio: 1 / 1;
  `}
`;
