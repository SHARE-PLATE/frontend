import styled, { css } from 'styled-components';

import {
  chatroomBarPaddingTop,
  chatTextareaWrapperPaddingTop,
  defaultTextareaHeight,
} from '@components/ChatroomBar/ChatroomBar.style';

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

export const LastBottomBlock = styled.div<{ blockHeight?: number }>`
  ${({ blockHeight }) => css`
    --height: ${blockHeight || defaultTextareaHeight}px;
    transition: all 0.15s;
    height: calc(var(--height) + 2 * ${chatroomBarPaddingTop + chatTextareaWrapperPaddingTop}rem);
    margin-top: 1rem;
  `}
`;
