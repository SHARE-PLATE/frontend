import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding};
    background-color: ${colors.white1};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `}
`;

export const CloseBtn = styled.button`
  height: 100%;
  z-index: 2;
  align-items: center;
  display: flex;
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

    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  `}
`;
