import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: left;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
  overflow: hidden;
  padding: 10px 12px;
`;

export const InputBox = styled.input`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumRegular};

    width: 100%;
    border: none;
    background-color: transparent;
    ::placeholder {
      color: ${colors.grey4};
    }

    :focus {
      ::placeholder {
        color: transparent;
      }
    }

    :focus-visible {
      outline: none;
    }
  `}
`;

export const UnitWrapper = styled.div<{ isValue?: boolean }>`
  ${({ isValue, theme: { colors } }) => css`
    padding-right: 0.25rem;
    ${!isValue &&
    css`
      color: ${colors.grey4};
    `}
  `}
`;
