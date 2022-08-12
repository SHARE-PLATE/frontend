import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  max-height: 400px;
`;
export const Img = styled.img`
  width: 100%;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 1rem;
  top: 1rem;
  path {
    stroke: white;
  }
`;
