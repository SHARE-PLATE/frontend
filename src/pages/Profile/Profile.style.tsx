import styled, { css } from 'styled-components';

import { defaultPageStyle } from '@styles/mixin';

export const ProfileWrapper = styled.div`
  ${defaultPageStyle}
`;

export const UpperWrapper = styled.div`
  background: rgb(255, 124, 110);
  background: linear-gradient(150deg, rgba(255, 124, 110, 1) 0%, rgba(255, 38, 42, 1) 100%);
  padding-bottom: 2.5rem;
`;
