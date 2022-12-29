import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const ErrorWrapper = styled.div`
  ${flexCenter};
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumRegular};
    color: ${colors.grey4};
    width: 100%;
    height: 5rem;
  `}
`;
