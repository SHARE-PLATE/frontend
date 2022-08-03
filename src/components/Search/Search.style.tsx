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
