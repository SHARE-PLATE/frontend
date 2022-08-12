import styled from 'styled-components';

import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}
`;

export const UpperWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
`;
