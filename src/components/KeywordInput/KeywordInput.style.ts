import styled, { css } from 'styled-components';

export const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 14px 8px;
  background-color: ${({ theme }) => theme.colors.grey1};
  border: 1px solid ${({ theme }) => theme.colors.white1};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.grey5};

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.largeRegular};
    color: ${colors.orange2};
    position: absolute;
    right: 2rem;
  `}
`;
