import styled, { css } from 'styled-components';

export const DescriptionWrapper = styled.div`
  min-height: 236px;
`;

export const ContentDescriptionInput = styled.textarea`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.main};
    ${fonts.largeRegular};
    width: 100%;
    min-height: 236px;
    padding: 0.75rem;
    border: 1px solid ${colors.grey3};
    background: ${colors.white2};
    border-radius: 4px;
    resize: none;

    :focus-visible {
      outline: none;
    }

    :focus {
      ::placeholder {
        color: transparent;
      }
    }

    ::placeholder {
      color: ${colors.grey4};
    }
  `}
`;
