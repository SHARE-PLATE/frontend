import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  width: 100%;
`;

export const ErrorWrapper = styled.div`
  ${flexCenter};
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumRegular};
    color: ${colors.grey4};
    width: 100%;
    height: 5rem;
  `}
`;

export const LeftWrapper = styled.div`
  display: flex;
  gap: 0.37rem;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 500;

    > :nth-child(2) {
      ${fonts.xSmall}
    }
  `}
`;

export const InfoDetailWrapper = styled.span`
  ${({ theme: { colors } }) => css`
    display: flex;
    gap: 0.35rem;
    color: ${colors.grey4};

    .number {
      color: ${colors.orange2};
      margin-left: 0.2rem;
    }
  `}
`;

export const FollowBtn = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallBold}
    ${flexCenter}
    gap: 0.25rem;
    border-radius: 0.25rem;
    background-color: ${colors.orange0};
    width: 3.5rem;
    height: 1.6rem;
    color: ${colors.orange2};
  `}
`;
