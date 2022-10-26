import styled, { css } from 'styled-components';

import { flexBetween, flexCenter, noScrollBar } from '@styles/mixin';

export const Wrapper = styled.form`
  ${({ theme: { colors, defaultWidth } }) => css`
    ${defaultWidth}
    ${flexBetween}
    width: 100%;
    gap: 0.6rem;
    background-color: ${colors.white1};
    padding: 0.4rem 0.9rem !important;
    min-height: 3.5rem;
    position: fixed;
    bottom: 0;
    box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.08);
    z-index: 100;
    flex-grow: 0 !important;
  `}
`;

export const PlusBtn = styled.div`
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

export const ChatTextareaWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    ${flexCenter}
    width: 100%;
    border-radius: 0.5rem;
    background-color: ${colors.grey2};
    padding: 0.3rem 0.6rem;
    min-height: 2.62rem;
  `}
`;

export const ChatTextarea = styled.textarea`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.main}
    ${fonts.largeRegular}
    ${noScrollBar}
    ${flexCenter}

    word-break: break-all;
    width: 100%;
    resize: none;
    border: none;
    line-height: 1.8rem;
    border-radius: 0.5rem;
    background-color: ${colors.grey2};
    min-height: 1.5rem;

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

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  min-width: 2rem;
`;
