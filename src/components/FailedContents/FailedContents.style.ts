import styled from 'styled-components';

export const FailedContent = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 200px;
  svg {
    margin: 0 auto;
    width: 30%;
    height: 30%;
  }
`;

export const FailedText = styled.span`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.grey7};
`;
