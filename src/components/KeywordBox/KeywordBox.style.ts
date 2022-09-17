import styled, { css } from 'styled-components';

//index.tsx
export const Table = styled.div``;

export const TableBox = styled.section`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white0};
    margin-bottom: 24px;
    border-radius: 8px;
    box-shadow: 4px 4px 8px #00000010;
    padding: 0 1rem;
  `}
`;

//KeywordTableHeader.tsx
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 0.7rem;
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
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small}
    font-weight: 500;
    border-radius: 0.25rem;
    letter-spacing: 0.4px;
    gap: 0.4rem;
    display: flex;
    align-items: center;
    background-color: ${colors.orange2};
    padding: 0.35rem 0.5rem;
    color: ${colors.white0};
  `}
`;
