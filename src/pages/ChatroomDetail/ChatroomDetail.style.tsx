import styled, { css } from 'styled-components';

import { ChatroomDetailInfoHeight } from '@components/ChatroomDetailInfo/ChatroomDetailInfo.style';
import { defaultPageStyle, flexCenter } from '@styles/mixin';

const remainingTimeHeight = 2.5;

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white1};
    ${defaultPageStyle}

    > :last-child {
      padding-bottom: 0;
    }

    gap: 0;
  `}
`;

export const TopFixedWrapper = styled.div`
  ${({ theme: { defaultWidth } }) => css`
    ${defaultWidth}

    position: sticky;
    top: 0;
    box-shadow: 0px 5px 5px #bbbaba47;
    width: 100%;
    z-index: 100;

    + * {
      padding-top: ${1 + remainingTimeHeight}rem;
    }
  `}
`;

export const RemainingTime = styled.div`
  ${({ theme: { defaultHeaderHeight, colors, fonts } }) => css`
    ${flexCenter};
    ${fonts.mediumBold};

    color: ${colors.white1};
    padding: 0;
    background-color: ${colors.grey7};
    z-index: 101;
    position: absolute;
    width: 10.25rem;
    height: ${remainingTimeHeight}rem;
    border-radius: 6.25rem;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%);
    top: ${defaultHeaderHeight + ChatroomDetailInfoHeight + 1}rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  `}
`;

export const ErrorWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white1};

    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
