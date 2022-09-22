import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

type SetCheckType = { isSet: boolean };

export const Wrapper = styled.div`
  ${flexBetween}
  padding-top: 1rem;
`;

export const ImgWrapper = styled.div<SetCheckType>`
  ${({ isSet, theme: { colors } }) =>
    !isSet &&
    css`
      width: 3.5rem;
      height: 3.5rem;
      opacity: 0.25;
      background-color: ${colors.orange0};
      border-radius: 10rem;
    `}
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.81rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  justify-content: center;
`;

export const Nickname = styled.h2<SetCheckType>`
  ${({ isSet, theme: { colors } }) => css`
    display: flex;
    align-items: center;
    height: 1rem;
    color: ${colors.white0};

    ${!isSet &&
    css`
      width: 5rem;
      opacity: 0.25;
      border-radius: 0.25rem;
      background-color: ${colors.orange0};
    `}
  `}
`;

export const Email = styled.span<SetCheckType>`
  ${({ isSet, theme: { fonts, colors } }) => css`
    display: flex;
    height: 1rem;
    align-items: center;
    ${fonts.smallRegular}
    color:${colors.white0};

    ${!isSet &&
    css`
      width: 10rem;
      opacity: 0.25;
      border-radius: 0.25rem;
      background-color: ${colors.orange0};
    `}
  `}
`;

export const IconWrapper = styled.button`
  ${({ theme: { colors } }) => css`
    path {
      stroke: ${colors.white0};
    }
  `}
`;
