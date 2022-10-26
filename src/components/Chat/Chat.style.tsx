import styled, { css } from 'styled-components';

import { chatroomBarButtonWidth, chatroomBarGap } from '@components/ChatroomBar/ChatroomBar.style';

export const profileImgWidth = '2.25rem';

export const Wrapper = styled.div<{ writtenByMe: boolean }>`
  display: flex;
  gap: 0.75rem;

  ${({ writtenByMe }) =>
    writtenByMe &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const ProfileImgWrapper = styled.div<{ shareWrittenByMe: boolean }>`
  ${({ theme: { colors }, shareWrittenByMe }) => css`
    width: ${profileImgWidth};

    // img container option
    > :nth-child(1) {
      border: solid 1px ${shareWrittenByMe ? colors.orange4 : 'transparent'};
    }
  `}
`;

export const AdditionalImgStyle = css`
  height: 2.25rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Writer = styled.div<{ writtenByMe: boolean }>`
  ${({ theme: { fonts }, writtenByMe }) => css`
    ${fonts.medium}
    ${writtenByMe &&
    css`
      text-align: right;
    `}

    line-height: 1.125rem;
  `}
`;

export const Seller = styled.span`
  ${({ theme: { fonts } }) => css`
    ${fonts.small}
  `}
`;

export const ContentsTimeWrapper = styled.div<{ writtenByMe: boolean }>`
  display: flex;
  gap: 0.4rem;

  ${({ writtenByMe }) =>
    writtenByMe &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const Contents = styled.div<{ writtenByMe: boolean }>`
  ${({ theme: { colors, fonts }, writtenByMe }) => css`
    ${fonts.largeRegular}

    word-break: break-all;
    overflow: hidden;
    border-radius: 0.5rem;
    border-top-left-radius: 0;
    background-color: ${colors.grey2};
    padding: 0.6rem calc(0.6rem + 2px);
    line-height: 1.65rem;
    max-width: calc(100% - 2 * ${chatroomBarGap + chatroomBarButtonWidth}rem + 3px);

    ${writtenByMe &&
    css`
      border-radius: 0.5rem;
      border-top-right-radius: 0;
      background-color: ${colors.orange2};
      color: ${colors.white1};
    `}
  `}
`;

export const DateTime = styled.div<{ writtenByMe: boolean }>`
  ${({ theme: { colors, fonts }, writtenByMe }) => css`
    ${fonts.xSmallRegular}
    ${writtenByMe &&
    css`
      text-align: right;
    `}

    display: flex;
    flex-direction: column;
    justify-content: end;
    min-width: 2.6rem;
    color: ${colors.grey4};
  `}
`;
