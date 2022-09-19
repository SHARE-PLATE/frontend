import styled from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const AdWrapper = styled.div`
  height: 100%;
  border-radius: 0.5rem;
`;

export const AdsWrapper = styled.div``;

export const AdContentWrapper = styled.div`
  ${flexCenter}
  height: calc(100% + 3rem);
`;
