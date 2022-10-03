import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const AddressListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const noAddressList = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.medium};
    ${flexCenter}
    height: 100%;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    max-height: 30rem;
    white-space: pre;
    line-height: 1.2rem;
    color: ${colors.grey7};

    path {
      stroke: ${colors.grey4};
    }
  `}
`;
