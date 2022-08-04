import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-left: 30px;

  img {
    position: absolute;
    top: 0px;
  }
`;

export const ListInfo = styled.div`
  position: absolute;
  left: 40%;
  padding: 3px;
`;

export const Title = styled.div`
  text-align: left;
  font-weight: bold;
`;

export const Location = styled.div`
  text-align: left;
  color: #918b8b;
`;

export const Cost = styled.div`
  text-align: left;
  font-weight: bold;
`;

export const Personnel = styled.div`
  text-align: left;
`;
