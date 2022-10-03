import styled from 'styled-components';

export const FailedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 120px;
  height: 200px;
  border-bottom: 0.375rem solid ${({ theme }) => theme.colors.grey1};
  svg {
    margin: 0 auto;
  }
`;

export const FailedText = styled.span`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.grey7};
`;
