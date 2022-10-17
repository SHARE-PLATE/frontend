import styled from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const HeaderWrapper = styled.div`
  ${flexBetween}
  height: 52px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.xLarge}
  font-weight: 500;
`;

export const SubmitBtn = styled.button`
  ${({ theme }) => theme.fonts.largeRegular}
`;
