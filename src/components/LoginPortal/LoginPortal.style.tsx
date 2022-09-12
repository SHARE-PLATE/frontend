import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 100%;
    background-color: ${colors.white1};
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.medium}
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.5rem;
    white-space: pre-wrap;
    color: ${colors.grey5};
  `}
`;

export const CloseBtn = styled.button`
  ${({ theme: { defaultPadding, defaultHeaderHeight } }) => css`
    ${defaultPadding};

    min-height: ${defaultHeaderHeight}rem;
    display: flex;
    align-items: center;
  `}
`;

export const KakaoLoginButton = styled.button`
  ${({ theme: { fonts } }) => css`
    ${fonts.large}
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: center;
    margin-top: 2.62rem;
    border-radius: 0.5rem;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
    background-color: #fee502;
    width: 60%;
    height: 3rem;

    svg {
      margin-top: 0.2rem;
    }
  `}
`;

export const PersonImagingWrapper = styled.div`
  padding-left: 5rem;
  padding-top: 8rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;
