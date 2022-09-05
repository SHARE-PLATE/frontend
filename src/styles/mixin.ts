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
    gap: 0.375rem;
  `}

  > * {
    ${defaultBoxStyle}
  }

  > :last-child {
    flex-grow: 1;
    padding-bottom: 6.5rem;
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
