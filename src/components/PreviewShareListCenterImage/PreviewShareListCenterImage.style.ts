import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  overflow-y: scroll;
  width: 100%;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;

  img {
    border-radius: 20px;
  }
`;

export const ShareInfo = styled.div`
  width: 110px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-weight: bold;
  margin: 10px 5px;
`;
