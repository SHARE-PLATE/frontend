import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.75rem;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: flex-start;

  > :first-child,
  > :last-child {
    height: 1rem;
  }
`;

export const AddressRegisteredText = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-grow: 1;
    gap: 0.25rem;

    > :nth-child(1) {
      ${fonts.mediumRegular}
      color: ${colors.grey6};
      line-height: 1rem;
    }
    > :nth-child(2) {
      ${fonts.smallLight};
      color: ${colors.grey4};
      line-height: 1rem;
    }
  `}
`;
