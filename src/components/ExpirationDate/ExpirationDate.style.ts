import styled, { css } from 'styled-components';

export const ExpirationDateWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallBold}
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 4px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 0.4rem;
    background-color: ${colors.black};
    opacity: 0.6;
    width: 100%;
    height: 100%;
    color: ${colors.white1};
  `}
`;

export const Text = styled.span`
  ${({ theme: { fonts } }) => css`
    ${fonts.smallBold}
  `}
`;
