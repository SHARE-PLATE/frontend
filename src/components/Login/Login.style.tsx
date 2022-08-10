import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.medium}
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 1.5rem;
    white-space: pre-wrap;
    color: ${colors.grey5};
  `}
`;

export const KakaoLoginButton = styled.button`
  ${({ theme: { fonts } }) => css`
    ${fonts.large}
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    border-radius: 2rem;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
    background-color: #fee502;
    width: 60%;
    height: 3rem;
  
    svg {
      margin-top: 0.2rem;
    }
  `}

`;

export const CloseBtn = styled.button`
  display: flex;
  position: absolute;
  top: 1rem;
  left: 1rem;
  align-items: center;
  justify-content: center;
  width: 10%;
  min-width: 30px;
  max-width: 50px;
  aspect-ratio: 1 / 1;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
