import styled from 'styled-components';

export const RecentWrapper = styled.div`
  flex-grow: 1;
  padding: 1rem;
`;

export const NoRecentListWrapper = styled.div`
  height: 10rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RecentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

export const RecentDeleteAllBtn = styled.button`
  color: grey;
  font-size: 0.8rem;
`;

export const RecentListWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RecentItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const RecentItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const RecentDeleteBtn = styled.button`
  display: flex;
`;
