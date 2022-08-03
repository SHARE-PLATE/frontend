import styled from 'styled-components';

export const Wrapper = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%; // same with navigation bar height (100 : 15)
  aspect-ratio: 1 / 1; // draw circle
  right: 3%; // width's 20%
  top: -120%; // 100% = width, 20% = same with right
  background-color: #ff5c21;
  border-radius: 10rem;
  box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05);
`;
