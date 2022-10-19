import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding};
    background-color: ${colors.white1};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
  `}
`;

export const NoRecentNoticeWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    ${flexCenter};
    color: ${colors.grey4};
    height: 20rem;
  `}
`;

export const ErrorWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    ${flexCenter}

    color: ${colors.grey7};
    height: 20rem;
  `}
`;

export const TopFixedWrapper = styled.div`
  ${({ theme: { colors, defaultWidth } }) => css`
    ${defaultWidth};
    background-color: ${colors.white1};
    width: calc(100% + 2rem);
    margin-left: -1rem;
    padding: 0 1rem;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
  `}
`;

export const Header = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    height: ${defaultHeaderHeight}rem;
    position: relative;
    display: flex;
    gap: 0.5rem;
    justify-content: left;
  `}
`;

export const HeaderTitle = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.xLarge};
    ${flexCenter};
    flex-grow: 1;
    height: 100%;
  `}
`;

export const TabsWrapper = styled.div``;
