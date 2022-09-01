import styled from 'styled-components';

export const SubHeader = styled.span``;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 1rem 0;
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

export const MaxKeyword = styled.span`
  color: ${({ theme }) => theme.colors.grey4};
`;
