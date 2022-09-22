import styled from 'styled-components';

import { defaultPageStyle } from '@styles/mixin';

export const ProfileWrapper = styled.div`
  ${defaultPageStyle}
`;

export const UpperWrapper = styled.div`
  background: rgb(255, 124, 110);
  background: linear-gradient(150deg, rgba(255, 124, 110, 1) 0%, rgba(255, 38, 42, 1) 100%);
  padding-bottom: 2.5rem;
`;

export const SharesWrapper = styled.div`
  margin-top: -1.5rem;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.08);

  > :first-child {
    padding-top: 1.5rem;
  }
`;
