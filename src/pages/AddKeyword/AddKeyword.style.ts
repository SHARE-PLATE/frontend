import styled from 'styled-components';

import { defaultPageStyle, subTitle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}
`;

export const Header = styled.div`
  ${subTitle}
  padding-bottom: 1rem;
`;

export const Subheader = styled.span`
  ${({ theme }) => theme.fonts.small}
`;

export const RegisteredKeywordWrapper = styled.div`
  padding-top: 2rem;
`;
