import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div<{ isMap: boolean }>`
  position: relative;
  ${({ isMap }) =>
    isMap &&
    css`
      padding: 0 !important; // show map with full width
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

export const HeaderBtn = styled.button`
  z-index: 2;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  max-width: 50px;
`;

export const HeaderTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const AddressInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 1rem 0;
`;

export const AddressInfoText = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    line-height: 1.2rem;
    > :nth-child(1) {
      ${fonts.mediumRegular};
    }
    > :nth-child(2) {
      ${fonts.smallLight};
      color: ${colors.grey4};
    }
  `}
`;

export const AddressInfoInput = styled.input`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.large};

    margin-bottom: 0.75rem;
    width: 100%;
    border: none;
    border: solid 1px ${colors.grey3};
    border-radius: 0.25rem;
    padding: 0.75rem;

    ::placeholder {
      ${fonts.mediumRegular};

      color: ${colors.grey4};
    }

    :focus {
      outline: none;
      ::placeholder {
        color: transparent;
      }
    }
  `}
`;

export const HomeCompanyBtnWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const HomeCompanyBtn = styled.button<{ isSelected: boolean }>`
  ${({ theme: { colors, fonts }, isSelected }) => css`
    ${fonts.mediumRegular};
    ${flexCenter}
    transition: 0.3s all;
    flex-grow: 1;
    flex-direction: column;

    gap: 0.4rem;
    height: 4.5rem;
    color: ${colors.grey4};
    border: solid 1px ${colors.grey3};
    border-radius: 0.25rem;

    path {
      stroke: ${colors.grey4};
    }

    ${isSelected &&
    css`
      border: 1px solid ${colors.orange4};
      background-color: ${colors.orange4};
      color: ${colors.white1};
      box-shadow: 2px 4px 8px rgba(255, 97, 76, 0.25);
      path {
        stroke: ${colors.white1};
      }
    `}
  `}
`;

export const MapCheckBtn = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.medium};
    ${flexCenter}
    border: solid 1px ${colors.grey3};
    height: 2.7rem;
    width: 100%;
    gap: 0.5rem;
    border-radius: 0.25rem;
  `}
`;

export const FinishBtn = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeBold};

    margin-top: 2rem;
    color: ${colors.white1} !important;
    border-radius: 0.25rem;
    background-color: ${colors.orange2};
    width: 100%;
    height: 2.75rem;
  `}
`;
