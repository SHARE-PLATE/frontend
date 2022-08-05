import styled from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const Wrapper = styled.div`
  ${flexBetween}
  margin-left: 20px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  float: left;
  margin-right: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Nickname = styled.h2`
  font-weight: bold;
`;

export const Email = styled.span`
  font-size: 12px;
`;

export const IconContainer = styled.div`
  margin-right: 26px;
`;
