import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${flexCenter}

  flex-direction: column;
  padding: 0 5px;
  width: 17rem;
  height: 8rem;
`;

export const Text = styled.p`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeBold}

    margin-bottom: 20px;
    color: ${colors.black};
  `}
`;

export const CloseButton = styled.button`
  ${flexCenter}

  border-radius: 4px;
  background: #ff5c21;
  width: 100%;
  height: 30px;
`;