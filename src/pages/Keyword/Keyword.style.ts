import styled, { css } from 'styled-components';

import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}
  position: relative;
`;

export const Header = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.largeBold}
  `}
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const AddKeyWord = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`;
