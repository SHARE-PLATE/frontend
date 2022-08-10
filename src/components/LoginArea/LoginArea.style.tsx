import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 12rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MentionWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.grey4};
    line-height: 1.2rem;
    text-align: center;
    white-space: pre;
  `}
`;

export const LoginButton = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumBold};
    margin-top: 1rem;
    background-color: ${colors.orange2};
    color: ${colors.white1};
    border-radius: 0.5rem;
    width: 10rem;
    height: 3rem;
  `}
`;
