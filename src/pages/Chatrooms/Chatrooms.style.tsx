import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white1};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
  `}
`;

export const TopFixedWarningStyle = css`
  margin-left: -1rem;
  width: calc(100% + 2rem);
`;

export const CenterWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeBold};
    color: ${colors.grey4};
    ${flexCenter}
    flex-grow: 1;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: -5rem;
  `}
`;

export const ReloadButton = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeBold};
    color: ${colors.white0};
    background-color: ${colors.grey4};
    ${flexCenter}
    border-radius: 0.5rem;
    width: 7.5rem;
    height: 3rem;
  `}
`;

export const HeaderWrapper = styled.div<{ isTop: boolean }>`
  ${({ theme: { colors, defaultWidth, defaultPadding }, isTop }) => css`
    ${defaultWidth};
    ${defaultPadding};

    background-color: ${colors.white1};
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 2;
    transition: all 0.3s;

    ${!isTop &&
    css`
      box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
    `}
  `}
`;

export const Header = styled.header`
  ${({ theme: { defaultHeaderHeight } }) => css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: right;
    height: ${defaultHeaderHeight}rem;
  `}
`;

export const HeaderTitle = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.xLarge}

    position: absolute;
    width: 100%;
    text-align: center;
  `}
`;
