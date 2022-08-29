import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Date = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular}

    padding-top: 1rem;
    text-align: center;
    color: ${colors.grey4};
  `}
`;

export const Chats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
`;
