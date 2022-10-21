import styled, { css } from 'styled-components';

export const Wrapper = styled.ul``;

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  cursor: pointer;
`;

export const Title = styled.span`
  ${({ theme: { fonts } }) => css`
    ${fonts.large};
    font-weight: 500;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    flex-grow: 1;
  `}
`;
