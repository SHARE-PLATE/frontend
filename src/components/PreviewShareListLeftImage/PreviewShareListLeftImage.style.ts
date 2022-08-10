import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-basis: 0;
  gap: 0.75rem;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  width: 7rem;
  overflow: hidden;
  aspect-ratio: 1 / 1;

  img {
    margin-top: -25%;
    margin-left: -25%;
    width: 150%;
  }
`;

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem;
  width: 12.7rem;
  overflow-wrap: break-word;
`;

export const ListInfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Title = styled.div`
  width: 100%;
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
