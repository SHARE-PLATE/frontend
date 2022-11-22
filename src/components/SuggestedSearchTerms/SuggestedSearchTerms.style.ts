import styled, { css } from 'styled-components';

import { flexBetween, flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0 1rem;
`;

export const SuggestedContainer = styled.div`
  ${flexBetween}
  position: relative;
  gap: 0.375rem;
  height: 2.625rem;
  background: ${({ theme }) => theme.colors.white0};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 0.375rem;
`;

export const Contents = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.125rem;
`;

export const SuggestedTitle = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallBold};
    ${flexCenter};

    border-radius: 0.25rem;
    height: 1.375rem;
    width: 3.5rem;
    padding: 0.25rem 0.375rem;
    color: ${colors.white1};
    background-color: ${colors.orange3};
  `}
`;

export const SuggestedItem = styled.div`
  margin-top: 0.75rem;
`;

export const AdditionalImgStyle = css`
  padding-right: 1rem;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0; ;
`;
