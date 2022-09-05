import styled, { css } from 'styled-components';

export const AddressListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const noAddressList = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.medium};

    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    justify-content: center;
    max-height: 30rem;
    white-space: pre;
    line-height: 1.2rem;
    color: ${colors.grey7};

    path {
      stroke: ${colors.grey4};
    }
  `}
`;
