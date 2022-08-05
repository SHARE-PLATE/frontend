import styled from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const Wrapper = styled.div`
  ${flexBetween}
  height: 52px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
`;

export const Icons = styled.div`
  display: flex;
`;
