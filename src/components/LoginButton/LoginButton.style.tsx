import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 1.5rem;
  white-space: pre-wrap;
`;

export const KakaoLoginButton = styled.button`
  border-radius: 2rem;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  background-color: #fee502;
  width: 80%;
  height: 3rem;
  font-weight: 700;
`;
