import styled, { css } from 'styled-components';

import { flexBetween, flexCenter, noScrollBar } from '@styles/mixin';

const defaultChatroomBarHeight = 2.62; //rem

export const defaultTextareaHeight = 30; // px

export const chatroomBarPaddingTop = 0.4; // rem

export const chatTextareaWrapperPaddingTop = 0.3; //rem

export const chatTextareaWrapperPaddingRight = 0.6; //rem

export const chatroomBarGap = 0.6; // rem

export const chatroomBarButtonWidth = 2; // rem

export const Wrapper = styled.form`
  ${({ theme: { colors, defaultWidth } }) => css`
    ${defaultWidth}
    ${flexBetween}
    width: 100%;
    align-items: flex-end;
    gap: ${chatroomBarGap}rem;
    background-color: ${colors.white1};
    padding: ${chatroomBarPaddingTop}rem 0.9rem !important;
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
    flex-direction: column;
    border-radius: 0.5rem;
    background-color: ${colors.grey2};
    padding: ${chatTextareaWrapperPaddingTop}rem ${chatTextareaWrapperPaddingRight}rem;
    min-height: ${defaultChatroomBarHeight}rem;
    overflow: hidden;
  `}
`;

export const ChatTextarea = styled.textarea<{ isShadow?: boolean }>`
  ${({ theme: { colors, fonts }, isShadow = false }) => css`
    ${fonts.main}
    ${fonts.largeRegular}
    ${noScrollBar}
    ${flexCenter}
 

    // remove default padding in browser
    padding: 0;
    word-break: break-all;
    width: 100%;
    resize: none;
    border: none;
    line-height: 1.65rem;
    border-radius: 0.5rem;
    background-color: ${colors.grey2};
    transition: all 0.15s;

    ::placeholder {
      color: ${colors.grey4};
    }

    :focus {
      outline: none;
      ::placeholder {
        color: transparent;
      }
    }

    ${isShadow &&
    css`
      height: 0px;
      opacity: 0;
    `}
  `}
`;

export const ButtonWrapper = styled.button`
  ${flexCenter};

  height: ${defaultChatroomBarHeight}rem;
  width: ${chatroomBarButtonWidth}rem;
  min-width: ${chatroomBarButtonWidth}rem;
`;
