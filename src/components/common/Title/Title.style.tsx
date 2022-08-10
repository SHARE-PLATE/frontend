import styled, { css } from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`;

export const TitleHeader = styled.span`
  ${({ theme: { fonts } }) => css`
    ${fonts.large}

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-weight: bold;
  `}
`;
