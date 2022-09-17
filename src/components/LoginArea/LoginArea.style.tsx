import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 12rem;
`;

export const MentionWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    text-align: center;
    line-height: 1.2rem;
    white-space: pre;
    color: ${colors.grey5};
  `}
`;

export const LoginButton = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeBold}
    margin-top: 1rem;
    border-radius: 0.5rem;
    background-color: ${colors.orange2};
    width: 10rem;
    height: 3rem;
    color: ${colors.white1};
    box-shadow: 2px 2px 4px #00000020;
  `}
`;
