import styled from 'styled-components';

import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}
`;

export const ListContent = styled.div``;

export const FailedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
`;

export const FailedText = styled.span`
  display: flex;
  margin: 0 auto;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.colors.grey7};
`;
