import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding}
    background-color: ${colors.white1};
    flex-grow: 1;
  `}
`;

export const Header = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.largeBold}
    padding-top: 1rem;
    padding-bottom: 1rem;
  `}
`;
