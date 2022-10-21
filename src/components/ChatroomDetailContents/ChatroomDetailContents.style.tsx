import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 0;
`;

export const Date = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular}
    padding-top: 1rem;
    text-align: center;
    color: ${colors.grey4};
  `}
`;
