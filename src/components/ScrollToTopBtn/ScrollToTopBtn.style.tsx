import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

type WrapperPropsType = { isShareDetail: boolean };

export const Wrapper = styled.button<WrapperPropsType>`
  ${({ theme: { colors }, isShareDetail }) => css`
    ${!isShareDetail &&
    css`
      animation: fadeout 0.2s forwards;
      pointer-events: none;
    `}

    ${isShareDetail &&
    css`
      animation: fadein 0.2s forwards;
    `}

    ${flexCenter}
    border-radius: 10rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
    background-color: ${colors.white1};
    height: 2.25rem;
    color: ${colors.black};
    aspect-ratio: 1 / 1;
  `}
`;
