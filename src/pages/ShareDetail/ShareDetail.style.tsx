import styled, { css } from 'styled-components';

import { ChatroomDetailInfoHeight } from '@components/ShareDetailInfoBar/ShareDetailInfoBar.style';
import { defaultPageStyle, flexBetween } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}
  gap: 6px;
`;

export const IconsWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    ${flexBetween}
    z-index: 2;
    width: 100%;
    height: 3.25rem;

    path {
      stroke: ${colors.grey6};
    }
  `}
`;

export const ShareDetailInfoBarWrapper = styled.div<{ isInfoBar: boolean }>`
  ${({ isInfoBar }) => css`
    height: 0rem;
    overflow: hidden;
    transition: all 0.15s;

    ${isInfoBar &&
    css`
      height: ${ChatroomDetailInfoHeight}rem;
    `}
  `}
`;

export const TopFixedWrapper = styled.div<{ isTop: boolean }>`
  ${({ theme: { defaultPadding, colors }, isTop }) => css`
    ${defaultPadding};
    background-color: ${colors.white1};
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 200;
    transition: all 0.3s;

    ${!isTop &&
    css`
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
    `}
  `}
`;

export const UpperWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-top: -6px;
`;

export const LowerWrapper = styled.section``;
