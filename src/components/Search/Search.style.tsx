import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
  border-bottom: 1px solid #eeeeee;
`;

export const CloseBtn = styled.button`
  width: 10%;
`;

export const Form = styled.form`
  flex-grow: 1;
  background-color: #d2d1d1;
  border-radius: 0.2rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  background-color: #d2d1d1;
  outline: none;
  border: none;
  margin-right: 0.5rem;
  flex-grow: 1;
`;

export const SubmitBtn = styled.button`
  width: 5%;
`;

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
