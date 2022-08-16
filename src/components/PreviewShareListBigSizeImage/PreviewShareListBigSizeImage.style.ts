import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 8px;
  width: 330px;
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
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
  line-height: 28px;
  white-space: nowrap;
  color: #010101;

  font-size: 18px;
`;

export const ImagePriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Location = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.grey7};
    font-size: 10px;
  `}
`;

export const ImageContents = styled.span`
  line-height: 24px;
  color: #010101;
  font-size: 15px;
  font-weight: 600;
`;

export const ImageOriginalPrice = styled.span`
  ${({ theme: { colors } }) => css`
    display: inline-block;
    opacity: 0.6;
    margin-left: 4px;
    text-decoration-line: line-through;
    line-height: 16px;
    color: ${colors.grey7};
    font-size: 11px;
    font-weight: 400;
  `}
`;
