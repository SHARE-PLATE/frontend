import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative;
  height: 3.25rem;
`;

export const Title = styled.h2`
  ${({ theme: { fonts } }) => fonts.xLarge}
  width: 100%;
  position: absolute;
  text-align: center;
`;

export const Icons = styled.div`
  display: flex;
`;
