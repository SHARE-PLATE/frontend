import styled, { css } from 'styled-components';

import { contentsPaddingTop } from '@components/ChatroomDetailContents/ChatroomDetailContents.style';
import { defaultPageStyle, flexCenter } from '@styles/mixin';

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
  ${({ theme: { defaultWidth, defaultPadding, colors } }) => css`
    ${defaultWidth}

    position: sticky;
    top: 0;
    padding: 0;
    background-color: transparent;
    width: 100%;
    z-index: 100;

    > :nth-child(2),
    > :nth-child(3) {
      background-color: ${colors.white1};
      ${defaultPadding};
    }

    // detail
    > :nth-child(3) {
      box-shadow: 0px 5px 5px #bbbaba47;
    }
  `}
`;

export const RemainingTime = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${flexCenter};
    ${fonts.mediumBold};

    color: ${colors.white1};
    background-color: ${colors.grey7};
    z-index: 101;
    position: sticky;
    width: 10.25rem;
    margin-top: 1rem;
    height: calc(${contentsPaddingTop}rem - 1rem);
    border-radius: 6.25rem;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%);
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
