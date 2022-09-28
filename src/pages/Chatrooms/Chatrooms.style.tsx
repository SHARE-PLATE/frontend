import styled, { css } from 'styled-components';

import { tabsHeight } from '@components/Tabs/Tabs.styled';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    background-color: ${colors.white1};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;

    > * {
      ${defaultPadding}
    }
  `}
`;

export const ContentsWrapper = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    padding-top: calc(${defaultHeaderHeight}rem + ${tabsHeight});
  `}
`;

export const CenterWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeBold};
    color: ${colors.grey4};
    flex-grow: 1;

    margin-top: -5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  `}
`;

export const ReloadButton = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeBold};
    color: ${colors.white0};
    background-color: ${colors.grey4};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    width: 7.5rem;
    height: 3rem;
  `}
`;

export const HeaderWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white1};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
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
