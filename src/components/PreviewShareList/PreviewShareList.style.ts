import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Container = styled.div`
  position: relative;
  padding-left: 20px;
  width: 100%;
  height: 100px;

  img {
    position: absolute;
    top: 0px;
    border-radius: 8px;
  }
`;

export const ListInfo = styled.div`
  display: flex;
  position: absolute;
  left: 36%;
  flex-direction: column;
  gap: 6px;
  padding: 3px;
  overflow-wrap: break-word;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  overflow-wrap: break-word;
`;

export const Location = styled.div`
  color: #918b8b;
  font-size: 10px;
`;

export const Cost = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
