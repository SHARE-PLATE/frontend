import styled, { css } from 'styled-components';

type WrapperPropsType = { isShareForm: boolean };

export const Wrapper = styled.button<WrapperPropsType>`
  ${({ theme: { colors }, isShareForm }) => css`
    background-color: ${colors.orange2};

    ${isShareForm &&
    css`
      animation: fadeout 0.2s forwards;
      pointer-events: none;
    `}

    ${!isShareForm &&
    css`
      animation: fadein 0.2s forwards;
    `}
  `}

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1; // draw circle
  height: 100%;
  right: 0.5rem;
  top: calc(-100% - 0.5rem); // 100% = width
  border-radius: 10rem;
  box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05);
`;
