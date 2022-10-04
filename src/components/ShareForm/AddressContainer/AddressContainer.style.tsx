import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const LocationSelectButton = styled.button`
  ${flexBetween}
  padding: 0 12px;
  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
  svg {
    padding-right: 0.2rem;
  }
`;

export const NoneLocation = styled.span`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.largeRegular};

    color: ${colors.grey4};
  `}
`;
