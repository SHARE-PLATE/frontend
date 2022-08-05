import { css } from 'styled-components';

import theme from '@styles/theme';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const defaultBoxStyle = css`
  padding: 0 1rem;
  background-color: ${theme.colors.white1};
`;

export const defaultPageStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex-grow: 1;

  > * {
    ${defaultBoxStyle};
  }

  > :last-child {
    flex-grow: 1;
  }
`;
