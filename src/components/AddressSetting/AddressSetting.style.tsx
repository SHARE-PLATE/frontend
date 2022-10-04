import styled, { css } from 'styled-components';

export const HomeCompanyWrapper = styled.div`
  ${({ theme: { defaultPadding } }) => css`
    ${defaultPadding};

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  `}
`;

export const HomeCompanyBtn = styled.button`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

export const HomeCompanyText = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.medium};
    text-align: left;
    flex-grow: 1;

    > :nth-child(2) {
      color: ${colors.grey4};
      ${fonts.smallLight};
    }
  `}
`;

export const AddressRegisteredList = styled.div`
  overflow-y: scroll;
`;
