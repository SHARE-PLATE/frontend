import styled, { css } from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`;

export const TitleHeader = styled.span`
  ${({ theme: { fonts } }) => css`
    ${fonts.large};
  `}

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 100%;
`;
