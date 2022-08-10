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
  display: flex;
  position: absolute;
  left: 30%;
  flex-direction: column;
  gap: 6px;
  padding: 3px;
  overflow-wrap: break-word;
`;

export const Title = styled.div`
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;

  font-weight: bold;
`;

export const Location = styled.div`
  color: #918b8b;
  font-size: 10px;
`;

export const Cost = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const ImageOriginalPrice = styled.span`
  display: inline-block;
  opacity: 0.6;
  margin-left: 4px;
  text-decoration-line: line-through;
  line-height: 16px;
  color: #a8a8a8;
  font-size: 11px;
  font-weight: 400;
`;
