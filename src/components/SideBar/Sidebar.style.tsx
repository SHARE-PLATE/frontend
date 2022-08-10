import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > :first-child {
    border-bottom: solid 1px black;
  }
  > :last-child {
    border-top: solid 1px black;
  }
`;

export const SideBarContent = styled.button`
  width: 100%;
  height: 3rem;
  text-align: left;
`;
