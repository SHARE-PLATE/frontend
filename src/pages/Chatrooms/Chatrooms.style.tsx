import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding};
    background-color: ${colors.white1};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
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
