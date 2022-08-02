import styled from 'styled-components';

export const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
  border-bottom: 1px solid #eeeeee;
`;

export const SearchCloseBtn = styled.button`
  width: 10%;
`;

export const SearchForm = styled.form`
  flex-grow: 1;
  background-color: #d2d1d1;
  border-radius: 0.2rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  background-color: #d2d1d1;
  outline: none;
  border: none;
  margin-right: 0.5rem;
  flex-grow: 1;
`;

export const SearchSubmitBtn = styled.button`
  width: 5%;
`;

export const SearchRecentWrapper = styled.div`
  flex-grow: 1;
  padding: 1rem;
`;

export const SearchRecentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

export const SearchRecentDeleteAllBtn = styled.button`
  color: grey;
  font-size: 0.8rem;
`;

export const SearchRecentListWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SearchRecentItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const SearchRecentItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const SearchRecentDeleteBtn = styled.button`
  display: flex;
`;
