import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;

  > * {
    flex-basis: 1;
  }
`;

export const TextWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DescText = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small};
    color: ${colors.grey4};
  `}
`;
