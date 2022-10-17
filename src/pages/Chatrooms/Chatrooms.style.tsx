import styled, { css } from 'styled-components';

import { tabsHeight } from '@components/Tabs/Tabs.styled';
import { flexCenter } from '@styles/mixin';

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

export const HeaderWrapper = styled.div`
  ${({ theme: { colors, defaultWidth } }) => css`
    ${defaultWidth};

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

export const AdditionalModalStyle = css`
  padding: 0 !important;
`;

export const DeleteChatModal = styled.div`
  ${({ theme: { colors } }) => css`
    width: 272px;
    height: 128px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.white0};
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
    padding: 16px 12px;
    border-radius: 8px;
  `}
`;

export const DeleteChatMention = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.smallRegular};
    text-align: center;
    white-space: pre;
    line-height: 19px;
  `}
`;

export const DeleteChatModalButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteChatModalButton = styled.button<{ isCancel: boolean }>`
  ${({ theme: { colors, fonts }, isCancel }) => css`
    ${fonts.mediumRegular};
    border: 1px solid ${isCancel ? colors.grey4 : colors.orange2};
    background-color: ${isCancel ? 'transparent' : colors.orange2};
    color: ${isCancel ? colors.grey4 : colors.white0};
    width: 118px;
    height: 42px;
    border-radius: 6px;
  `}
`;
