import styled, { css } from 'styled-components';

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
  ${({ theme: { fonts } }) => css`
    ${fonts.xLargeBold};
    display: flex;
    justify-content: space-between;
  `}
`;

export const RecentDeleteAllBtn = styled.button`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium};
    color: #999999;
  `}
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
  ${({ theme: { fonts } }) => css`
    ${fonts.medium}
  `}

  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const RecentItemName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    padding-top: 0.25rem;
  }
`;

export const RecentItemDate = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.2rem;
  color: #999999;
`;

export const RecentDeleteBtn = styled.button`
  display: flex;
  align-items: center;
`;
