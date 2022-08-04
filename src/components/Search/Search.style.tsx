import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-bottom: 6px solid #eeeeee;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const CloseBtn = styled.button`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  flex-grow: 1;
  background-color: #d2d1d1;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  height: 3rem;
  justify-content: space-between;
`;

export const Input = styled.input`
  ${({ theme: { fonts } }) => css`
    ${fonts.large}// 16px 미만일 시, 아이폰에서 focus할 때 확대 발생
  `}
  background-color: #d2d1d1;
  outline: none;
  border: none;
  margin-right: 0.5rem;
  flex-grow: 1;

  :focus::placeholder {
    color: transparent;
  }
`;

export const SubmitBtn = styled.button`
  width: 5%;
`;
