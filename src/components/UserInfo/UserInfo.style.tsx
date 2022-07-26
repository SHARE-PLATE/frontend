import styled, { css } from 'styled-components';

import { flexBetween, flexCenter } from '@styles/mixin';

type SetCheckType = { isSet: boolean };
type TextType = SetCheckType & {
  textColor: string;
};

export const Wrapper = styled.div`
  ${flexBetween}
  padding-top: 1rem;
`;

export const NoInfoWrapper = styled.div<{ arrowIcon: boolean }>`
  ${({ arrowIcon, theme: { colors } }) => css`
    ${flexCenter};
    color: ${arrowIcon ? colors.white0 : colors.black};
    width: 100%;
    height: 30px;
  `}
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

export const Nickname = styled.h2<TextType>`
  ${({ isSet, textColor, theme: { colors, fonts } }) => css`
    display: flex;
    align-items: center;
    height: 1rem;
    color: ${textColor};
    ${fonts.mediumRegular}
    ${!isSet &&
    css`
      width: 5rem;
      opacity: 0.25;
      border-radius: 0.25rem;
      background-color: ${colors.orange0};
    `}
  `}
`;

export const Email = styled.span<TextType>`
  ${({ isSet, textColor, theme: { fonts, colors } }) => css`
    display: flex;
    height: 1rem;
    align-items: center;
    ${fonts.smallRegular}
    color:${textColor};

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
