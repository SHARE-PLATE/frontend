import styled, { css } from 'styled-components';

import { flexBetween, flexCenter } from '@styles/mixin';

export const Wrapper = styled.form`
  ${({ theme: { colors, defaultWidth } }) => css`
    ${defaultWidth}
    ${flexBetween}
    width: 100%;
    gap: 0.6rem;
    background-color: ${colors.white1};
    padding: 0 0.9rem;
    height: 3.5rem;
    position: fixed;
    bottom: 0;
    box-shadow: 0px -10px 40px #67676740;
    z-index: 100;
  `}
`;

export const PlusBtn = styled.button`
  ${({ theme: { colors } }) => css`
    ${flexCenter}
    border-radius: 0.375rem;
    background-color: ${colors.orange4};
    width: 1.88rem;
    min-width: 1.88rem;
    height: 1.88rem;
    path {
      stroke: ${colors.white1};
    }
  `}
`;

export const ChatInput = styled.input`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeRegular}

    width: 100%;
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
