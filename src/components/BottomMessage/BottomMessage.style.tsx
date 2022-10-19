import styled, { css } from 'styled-components';

export type PositionType = 'up' | 'down' | null;

export const Wrapper = styled.div<{ position: PositionType }>`
  ${({ theme: { defaultWidth, defaultPadding }, position }) => css`
    ${defaultWidth};
    ${defaultPadding};

    width: 100%;
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 300;
    margin-bottom: -75%;

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
      animation: slidein-bottom 1s forwards;
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
