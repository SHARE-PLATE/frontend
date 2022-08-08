import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.grey5};
    ${fonts.medium};
  `}

  display: flex;
  position: relative;
  gap: 1rem;
  white-space: pre-wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.5rem;
  width: 100%;
  height: 100%;
`;

export const KakaoLoginButton = styled.button`
  ${({ theme: { fonts } }) => css`
    ${fonts.large};
  `}

  border-radius: 2rem;
  background-color: #fee502;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  width: 60%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  margin-top: 2rem;

  svg {
    margin-top: 0.2rem;
  }
`;

export const CloseBtn = styled.button`
  width: 10%;
  min-width: 30px;
  max-width: 50px;
  aspect-ratio: 1 / 1;
  display: flex;
  position: absolute;
  left: 1rem;
  top: 1rem;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
