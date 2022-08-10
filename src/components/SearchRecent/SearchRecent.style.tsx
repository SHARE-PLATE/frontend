import styled, { css } from 'styled-components';

export const RecentWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    flex-grow: 1;
    background-color: ${colors.white1};
  `}
`;

export const NoRecentListWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 10rem;
    text-align: center;
    color: ${colors.grey4};
  `}
`;

export const RecentHeader = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.xLargeBold}
    display: flex;
    padding-top: 1rem;
    justify-content: space-between;
  `}
`;

export const RecentDeleteAllBtn = styled.button`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.medium}
    color: ${colors.grey4};
  `}
`;

export const RecentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const RecentItemWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  cursor: pointer;
`;

export const RecentItemInfo = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium}
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
  `}
`;

export const RecentItemName = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const RecentItemDate = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    color: ${colors.grey4};
  `}
`;

export const RecentDeleteBtn = styled.button`
  display: flex;
  align-items: center;
`;
