import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    flex-grow: 1;
    height: 100%;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white1};
  `}
`;

export const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const LoginFailed = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xLargeBold}

    color: ${colors.orange2};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small}

    background-color: ${colors.orange2};
    border-radius: 0.5rem;
    width: 3.7rem;
    height: 2rem;
    color: ${colors.white1};
  `}
`;
