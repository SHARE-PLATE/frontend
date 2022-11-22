import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding};
    background-color: ${colors.white1};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `}
`;

export const ErrorWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    ${flexCenter}

    color: ${colors.grey7};
    height: 20rem;
  `}
`;

export const TopFixedWrapper = styled.div<{ isTop: boolean }>`
  ${({ theme: { colors, defaultWidth }, isTop }) => css`
    ${defaultWidth};
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: ${colors.white1};
    width: calc(100% + 2rem);
    margin-left: -1rem;
    padding: 0 1rem;
    transition: all 0.3s;

    ${!isTop &&
    css`
      box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
    `}
  `}
`;

export const TopFixedWarningStyle = css`
  margin-left: -1rem;
  width: calc(100% + 2rem);
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
