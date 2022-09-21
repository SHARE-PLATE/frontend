import styled, { css } from 'styled-components';

import { flexBetween, tagStyle } from '@styles/mixin';

//index.tsx
export const Table = styled.div``;

export const TableBox = styled.section`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white0};
    margin-bottom: 24px;
    border-radius: 8px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
    padding: 0 0.75rem;
  `}
`;

//KeywordTableHeader.tsx
export const Header = styled.header`
  ${flexBetween}
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};
`;

export const Title = styled.h2`
  ${({ theme: { fonts } }) => css`
    ${fonts.largeBold}
  `}
`;

//KeywordTable.tsx
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.span`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small}

    display: flex;
    align-items: center;
    padding: 0.6rem 0;
    color: ${colors.grey4};
  `};
`;

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 1rem;
`;

export const KeywordItem = styled.span`
  ${tagStyle}
`;
