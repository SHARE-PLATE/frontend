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
  text-align: left;
  height: 3rem;
  width: 100%;
`;
