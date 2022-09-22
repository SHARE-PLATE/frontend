import styled, { css } from 'styled-components';

import { subTitle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding};
    background-color: ${colors.white1};
    flex-grow: 1;
  `}
`;

export const Header = styled.div`
  ${subTitle}
  padding: 1rem 0;
  display: flex;
  gap: 0.25rem;
  align-items: baseline;
`;

export const Subheader = styled.span`
  ${({ theme }) => theme.fonts.small}
`;
