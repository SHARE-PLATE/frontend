import styled, { css } from 'styled-components';

import { ColorsType } from '@styles/theme';

export type AnimationPropsType = {
  color: ColorsType;
  size: number;
  border: number;
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Animation = styled.div<AnimationPropsType>`
  ${({ theme: { colors }, color, size, border }) => css`
    margin: 0 auto;
    border: solid ${border}px;
    border-radius: 50%;
    border-color: ${colors[color]} transparent transparent transparent;
    width: ${size}px;
    height: ${size}px;
    animation: spinning 1s infinite;

    @keyframes spinning {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;
