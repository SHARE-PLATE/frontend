import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: right;
  height: 3.25rem;
`;

export const Title = styled.h2`
  ${({ theme: { fonts } }) => fonts.xLarge}
  position: absolute;
  width: 100%;
  text-align: center;
`;

export const Icons = styled.div`
  display: flex;
`;
