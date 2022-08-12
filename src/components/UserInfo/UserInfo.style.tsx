import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const Wrapper = styled.div`
  ${flexBetween}
  padding-top: 1rem;
`;

export const Image = styled.img`
  float: left;
  margin-right: 20px;
  border-radius: 50px;
  width: 60px;
  height: 60px;
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const Nickname = styled.h2``;

export const Email = styled.span`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.smallRegular}
    color:${colors.grey4};
  `}
`;
