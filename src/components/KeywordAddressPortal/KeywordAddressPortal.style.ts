import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { colors, defaultPadding } }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    background-color: ${colors.grey1};
    height: 100%;

    > * {
      ${defaultPadding};
      background-color: ${colors.white1};
    }

    > :last-child {
      flex-grow: 1;
    }
  `}
`;

export const TopWrapper = styled.div``;

export const Header = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    height: ${defaultHeaderHeight}rem;
    position: relative;
    display: flex;
    gap: 0.5rem;
    justify-content: left;
  `}
`;

export const HeaderBtn = styled.button`
  ${flexCenter}
  min-width: 30px;
  max-width: 50px;
  z-index: 2;
  left: 0;
`;

export const HeaderTitle = styled.div`
  ${flexCenter}
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const AddressInputArea = styled.form`
  ${({ theme: { colors } }) => css`
    display: flex;
    height: 3.125rem;
    align-items: center;
    padding: 0.8rem;
    background-color: ${colors.grey1};
    width: 100%;
    gap: 0.5rem;
    border-radius: 0.25rem;
  `}
`;

export const AddressInput = styled.input`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeRegular};

    background-color: ${colors.grey1};
    border: none;
    color: ${colors.black};
    flex-grow: 1;

    :focus {
      outline: none;
      ::placeholder {
        color: transparent;
      }
    }
  `}
`;

export const AroundSearchButton = styled.button`
  ${({ theme: { fonts } }) => css`
    ${fonts.mediumRegular};
    width: 100%;
    ${flexCenter}
    height: 3.37rem;
    z-index: 5;
    gap: 0.58rem;
  `}
`;

//KeywordAddressList
export const AddressListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const noAddressList = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.medium};
    ${flexCenter}
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    height: 100%;
    max-height: 30rem;
    white-space: pre;
    line-height: 1.2rem;
    color: ${colors.grey7};

    path {
      stroke: ${colors.grey4};
    }
  `}
`;
