import styled, { css } from 'styled-components';

export const contentsPaddingTop = 3.5; //rem

export const Wrapper = styled.div`
  display: flex;
  padding-top: ${contentsPaddingTop}rem !important;
  margin-top: -${contentsPaddingTop}rem;
  flex-direction: column;
  gap: 1.5rem;
  flex-grow: 1;
`;

export const Date = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular}
    padding-top: 1rem;
    text-align: center;
    color: ${colors.grey4};
  `}
`;

export const LastBottomBlock = styled.span`
  height: 3.5rem;
`;
