import styled, { css } from 'styled-components';

export const AddressWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.large}
    width: 100%;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;
