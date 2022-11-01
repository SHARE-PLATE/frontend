import { css } from 'styled-components';

import theme from '@styles/theme';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const defaultBoxStyle = css`
  ${theme.defaultPadding}
  background-color: ${theme.colors.white1};
`;

export const defaultPageStyle = css`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.grey1};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `}

  > * {
    ${defaultBoxStyle}
  }

  > :last-child {
    flex-grow: 1;
    padding-bottom: 5.75rem;
  }
`;

export const subTitle = css`
  ${({ theme: { fonts } }) => css`
    padding-top: 2rem;
    ${fonts.xLargeBold}
  `}
`;

export const noScrollBar = css`
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const tagStyle = css`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small}
    font-weight: 500;
    border-radius: 0.25rem;
    letter-spacing: 0.4px;
    gap: 0.4rem;
    display: flex;
    align-items: center;
    background-color: ${colors.orange2};
    padding: 0.35rem 0.5rem;
    height: 1.5rem;
    color: ${colors.white0};
  `}
`;
