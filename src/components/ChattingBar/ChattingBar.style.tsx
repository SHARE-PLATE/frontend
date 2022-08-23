import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white1};
    height: 3.5rem;
    display: flex;
    gap: 0.6rem;
    align-items: center;
    padding: 0 0.9rem;
    justify-content: space-between;
  `}
`;

export const PlusBtn = styled.button`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.orange1};
    border-radius: 0.375rem;
    width: 1.88rem;
    height: 1.88rem;
    display: flex;
    align-items: center;
    justify-content: center;
    path {
      stroke: ${colors.white1};
    }
  `}
`;

export const ChatInput = styled.input`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeRegular};
    background-color: ${colors.grey2};
    flex-grow: 1;
    height: 2.62rem;
    border-radius: 0.5rem;
    border: none;
    padding: 0.6rem 0.75rem;

    ::placeholder {
      color: ${colors.grey4};
    }

    :focus {
      outline: none;
      ::placeholder {
        color: transparent;
      }
    }
  `}
`;
