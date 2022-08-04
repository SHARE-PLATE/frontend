import styled from 'styled-components';

export const NavigationBarWrapper = styled.div`
  z-index: 3;
  display: flex;
  justify-content: space-around;
  padding: 0.4rem;
  color: white;
  background-color: black;
  width: 100%;
  max-width: 750px;
  aspect-ratio: 100 / 15;
  max-height: 60px;
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
