import styled, { css } from 'styled-components';

import { defaultPageStyle, subTitle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}
`;

export const Header = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.largeBold}
  `}
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
