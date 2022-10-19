import styled, { css } from 'styled-components';

export const Wrapper = styled.button<{ isDeleteMode: boolean }>`
  ${({ theme: { fonts, colors }, isDeleteMode }) => css`
    ${fonts.large};

    display: block;
    transition: height 0.3s;
    height: ${isDeleteMode ? '44px' : '0px'};
    background-color: ${colors.grey2};
    color: ${colors.black};
    margin-left: -1rem;
    width: calc(100% + 2rem);
    overflow: hidden;
  `}
`;
