import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  padding: 0 15px;
  width: 22rem;
  height: 120px;
`;

export const Text = styled.p`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.black};
    ${fonts.largeBold}
    margin-bottom: 20px;
  `}
`;

export const CloseButton = styled.button`
  ${flexCenter}
  width: 100%;
  height: 30px;
  border-radius: 4px;
  background: #ff5c21;
`;
