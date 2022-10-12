import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    ${flexCenter}
    flex-direction: column;
    flex-grow: 1;
    background-color: ${colors.white1};
    height: 100%;
    gap: 1rem;
  `}
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Mention = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumBold}
    ${flexCenter}
    width: 14rem;
    border: solid 2px ${colors.orange2};
    border-radius: 0.5rem;
    height: 3rem;
    color: ${colors.orange2};
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumBold}

    border-radius: 0.5rem;
    background-color: ${colors.orange2};
    width: 6.5rem;
    height: 3rem;
    color: ${colors.white1};
  `}
`;
