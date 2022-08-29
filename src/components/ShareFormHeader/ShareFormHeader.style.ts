import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: left;
  height: 3.25rem;
`;

export const Title = styled.h2`
  ${({ theme: { fonts } }) => fonts.xLarge}

  margin: 0 auto;
  text-align: center;
`;
