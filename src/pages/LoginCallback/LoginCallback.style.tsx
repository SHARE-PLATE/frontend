import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    background-color: ${colors.white1};
    height: 100%;
  `}
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LoginFailed = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xLargeBold}

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    color: ${colors.orange2};
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small}

    border-radius: 0.5rem;
    background-color: ${colors.orange2};
    width: 3.7rem;
    height: 2rem;
    color: ${colors.white1};
  `}
`;
