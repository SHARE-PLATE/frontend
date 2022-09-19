import styled, { css } from 'styled-components';

export const InputFieldWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${colors.grey1};
    border-radius: 0.25rem;
    height: 50px;
    padding: 0.75rem;
  `}
`;

export const Input = styled.input`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.large}
    flex-grow: 1;
    border: none;
    background-color: ${colors.grey1};

    ::placeholder {
      color: ${colors.grey5};
      ${fonts.medium}
    }

    &:focus {
      outline: none;
      ::placeholder {
        color: transparent;
      }
    }
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.large};
    font-weight: 500;
    color: ${colors.black};
  `}
`;
