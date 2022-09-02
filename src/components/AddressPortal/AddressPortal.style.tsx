import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: ${colors.white1};
    height: 100%;
  `}
`;

export const Header = styled.div`
  ${({ theme: { defaultHeaderHeight, defaultPadding } }) => css`
    ${defaultPadding}
    height: ${defaultHeaderHeight}rem;
    position: relative;
    display: flex;
    width: calc(100% - 2 * 1rem);
    gap: 0.5rem;
    justify-content: left;
  `}
`;

export const CloseBtn = styled.button<{ isAddressModalOpen: boolean }>`
  ${({ theme: { colors }, isAddressModalOpen }) => css`
    z-index: 2;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    max-width: 50px;
    pointer-events: none;

    ${!isAddressModalOpen &&
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

export const AddressButton = styled.button`
  background-color: red;
  width: 100%;
  height: 2rem;
`;
