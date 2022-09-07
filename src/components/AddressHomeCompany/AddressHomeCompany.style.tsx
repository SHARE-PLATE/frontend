import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

export const Text = styled.div`
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
