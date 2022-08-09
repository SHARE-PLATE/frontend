import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 330px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 7px 0px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageTitle = styled.h2`
  width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 18px;
  line-height: 28px;
  color: #010101;
`;

export const ImagePriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImagePrice = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #010101;
`;

export const ImageOriginalPrice = styled.span`
  display: inline-block;
  margin-left: 4px;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-decoration-line: line-through;
  color: #a8a8a8;
  opacity: 0.6;
`;
