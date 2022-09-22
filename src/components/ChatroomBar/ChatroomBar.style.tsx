import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme: { colors, defaultWidth } }) => css`
    ${defaultWidth}

    display: flex;
    gap: 0.6rem;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.white1};
    padding: 0 0.9rem;
    height: 3.5rem;
    position: fixed;
    bottom: 0;
    box-shadow: 0px -10px 40px #67676740;
    width: 100%;
    z-index: 100;
  `}
`;

export const PlusBtn = styled.button`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background-color: ${colors.orange4};
    width: 1.88rem;
    height: 1.88rem;
    path {
      stroke: ${colors.white1};
    }
  `}
`;

export const ChatInput = styled.input`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeRegular}

    flex-grow: 1;
    border: none;
    border-radius: 0.5rem;
    background-color: ${colors.grey2};
    padding: 0.6rem 0.75rem;
    height: 2.62rem;

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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
