import styled, { css } from 'styled-components';

export const NavigationBarWrapper = styled.div`
  ${({ theme: { defaultWidth } }) => css`
    position: fixed;
    display: flex;
    justify-content: space-around;
    padding: 0.4rem;
    color: white;
    background-color: black;
    width: 100%;
    ${defaultWidth};
    height: 7%;
    max-height: 60px;
    bottom: 0;
  `}
`;

export const NavigationBarBtn = styled.button`
  color: white;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
`;
