import styled, { css } from 'styled-components';

import { tagStyle } from '@styles/mixin';

export const Wrapper = styled.div``;

export const SubHeader = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small}
    color:${colors.grey6};
    font-weight: 500;

    > :last-child {
      color: ${colors.grey4};
    }
  `}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 1rem 0;
`;

export const KeywordItem = styled.span`
  ${tagStyle};
`;

export const IconWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;

    path {
      stroke: ${colors.white0};
    }
  `}
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 4px;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.orange2};
  padding: 4px 6px;
`;

export const ContentItem = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white1};
`;
