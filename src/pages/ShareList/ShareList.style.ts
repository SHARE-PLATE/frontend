import styled from 'styled-components';

export const ListHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white1};
`;

export const ListContents = styled.div`
  height: 100%;
  padding: 1rem;
  padding-top: 155px;
`;
