import styled, { css } from 'styled-components';

export const AddressWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.large};
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;
