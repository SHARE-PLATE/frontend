import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const imgWidth = '3rem';

export const Wrapper = styled.div``;

export const NoRecentNoticeWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    ${flexCenter};
    color: ${colors.grey4};
    height: 20rem;
  `}
`;
