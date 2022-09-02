import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

export const CurLocation = styled.div`
  position: absolute;
  top: 10px;
  left: 24px;
  width: 80%;
`;

export const PostCodeStyle = {
  display: 'block',
  height: '100%',
} as const;
