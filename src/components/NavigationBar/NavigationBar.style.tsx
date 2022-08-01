import styled from 'styled-components';

export const NavigationBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.4rem;
  color: white;
  background-color: black;
  height: 7%;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const NavigationBarBtn = styled.button`
  color: white;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
`;
