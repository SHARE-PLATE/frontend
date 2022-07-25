import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  height: 540px;
  padding: 0 15px;
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
