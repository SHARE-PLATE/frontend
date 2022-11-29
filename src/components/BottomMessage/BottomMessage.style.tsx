import styled, { css } from 'styled-components';

export type PositionType = 'up' | 'down' | null;

export type WrapperPropsType = {
  position: PositionType;
  bottomDistance: number;
};

export const Wrapper = styled.div<WrapperPropsType>`
  ${({ theme: { defaultWidth, defaultPadding }, position, bottomDistance }) => css`
    ${defaultWidth};
    ${defaultPadding};

    position: fixed;
    width: 100%;
    left: 50%;
    transform: translate(-50%);
    z-index: 300;
    margin-bottom: -75%;
    bottom: ${bottomDistance}rem;

    ${!position &&
    css`
      display: none;
    `}

    ${position === 'up' &&
    css`
      animation: slideout-bottom 0.5s forwards;
    `}
      
    ${position === 'down' &&
    css`
      animation: slidein-bottom 2s forwards;
    `}
  `}
`;

export const MessageWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.large}

    height: 44px;
    padding: 0.75rem;
    color: ${colors.white0};
    background-color: ${colors.orange4};
    border-radius: 6px;
    box-shadow: 2px 4px 8px rgba(255, 69, 58, 0.2);
  `}
`;
