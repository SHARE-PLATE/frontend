import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${flexCenter}
    ${fonts.large}

    height: 48px;
    width: 96px;
    padding: 2px 4px;
    display: flex;
    justify-content: space-around;
    border: 1px solid ${colors.grey3};
    border-radius: 4px;
  `}
`;

export const CountButton = styled.button<{ isClickable: boolean }>`
  ${({ theme: { colors }, isClickable }) => css`
    width: 24px;
    height: 24px;
    path {
      stroke: ${isClickable ? colors.black : colors.grey4};
    }
  `}
`;

export const RecruitmentText = styled.span`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeRegular};
    color: ${colors.grey4};
  `}
`;
