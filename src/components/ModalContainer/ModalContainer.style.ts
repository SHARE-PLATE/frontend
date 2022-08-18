import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 15px;
  width: 350px;
  height: 515px;
`;

export const CurLocation = styled.div`
  position: absolute;
  top: 10px;
  left: 24px;
  width: 80%;
`;

export const PostCodeStyle = {
  display: 'block',
  position: 'absolute',
  top: '8%',
  width: '90%',
  height: '90%',
  padding: '7px',
} as const;
