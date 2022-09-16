import styled, { css } from 'styled-components';

//index.tsx
export const Table = styled.div``;

export const TableBox = styled.section`
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 1rem;
`;

//KeywordTableHeader.tsx
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};

  svg {
    margin-top: 5px;
    margin-right: 5px;
  }
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
  gap: 14px;
  padding: 12px 0;
`;

export const SubTitle = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey4};
`;

export const Item = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ItemText = styled.span`
  font-size: 14px;
  border-radius: 0.25rem;
  background-color: #ff5c21;
  padding: 4px 8px;
  color: #fff;
`;
