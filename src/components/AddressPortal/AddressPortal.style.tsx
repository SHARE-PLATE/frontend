import styled, { css } from 'styled-components';

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

export const TopWrapper = styled.div`
  ${({ theme: { defaultPadding } }) => css`
    ${defaultPadding}
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

export const CloseBtn = styled.button<{ isList: boolean }>`
  ${({ theme: { colors }, isList }) => css`
    z-index: 2;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    max-width: 50px;
    pointer-events: none;

    ${!isList &&
    css`
      pointer-events: all;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        path {
          stroke: ${colors.black};
        }
      }
    `}
  `}
`;

export const HeaderTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const AddressInputArea = styled.form`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    padding: 0.8rem;
    background-color: ${colors.grey1};
    width: 100%;
    gap: 0.8rem;
    height: 3.125rem;
    border-radius: 0.25rem;
  `}
`;

export const AddressInput = styled.input`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumRegular};

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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.37rem;
    z-index: 5;
    gap: 0.58rem;
  `}
`;

export const HomeAndCompanyWrapper = styled.div`
  ${({ theme: { defaultPadding, fonts } }) => css`
    ${fonts.medium};
    ${defaultPadding};

    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    > button {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
  `}
`;

export const RegisteredAddressList = styled.div``;

export const RegisteredAddress = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: flex-start;

  > :first-child,
  > :last-child {
    height: 1rem;
  }
`;

export const RegisteredAddressText = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-grow: 1;
    gap: 0.25rem;

    > :nth-child(1) {
      ${fonts.mediumRegular}
      color: ${colors.grey6};
      line-height: 1rem;
    }
    > :nth-child(2) {
      ${fonts.smallLight};
      color: ${colors.grey4};
      line-height: 1rem;
    }
  `}
`;

export const AddressListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const AddressListItem = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumRegular};

    padding: 1rem 0;
    border-bottom: 1px solid ${colors.grey1};

    :last-child {
      border-bottom: none;
    }
  `}
`;

export const AddressListRoadName = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    display: flex;
    gap: 0.25rem;
    align-items: center;
    color: ${colors.grey4};
    margin-top: 0.4rem;

    ${fonts.smallLight};

    > :nth-child(1) {
      ${fonts.xSmallLight};
      color: ${colors.blue0};
      border: 1px solid ${colors.grey2};
      border-radius: 0.1rem;
      padding: 0.15rem 0.2rem;
    }
  `}
`;

export const noAddressList = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.medium};

    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    justify-content: center;
    max-height: 30rem;
    white-space: pre;
    line-height: 1.2rem;
    color: ${colors.grey7};

    path {
      stroke: ${colors.grey4};
    }
  `}
`;
