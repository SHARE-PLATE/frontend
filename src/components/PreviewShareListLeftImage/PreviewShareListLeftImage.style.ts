import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100px;

  img {
    position: absolute;
    top: 0px;
    border-radius: 8px;
  }
`;

export const ListInfo = styled.div`
  position: absolute;
  left: 30%;
  padding: 3px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-wrap: break-word;
`;

export const Title = styled.div`
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-weight: bold;
  font-size: 14px;
`;

export const Location = styled.div`
  color: #918b8b;
  font-size: 10px;
`;

export const Cost = styled.div`
  font-weight: bold;
  font-size: 14px;
`;
