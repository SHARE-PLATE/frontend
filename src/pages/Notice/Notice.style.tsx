import styled, { css } from 'styled-components';

import { tabsHeight } from '@components/Tabs/Tabs.styled';
import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors, defaultHeaderHeight } }) => css`
    ${defaultPadding};
    background-color: ${colors.white1};
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    // notice content top padding
    > :last-child {
      padding-top: calc(${defaultHeaderHeight}rem + ${tabsHeight});
    }
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
    width: 100%;
    position: fixed;
    top: 0;
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
