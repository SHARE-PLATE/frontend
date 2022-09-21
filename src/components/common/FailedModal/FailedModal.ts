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
    ${fonts.mediumRegular}

    margin-bottom: 20px;
    color: ${colors.black};
  `}
`;

export const CloseButton = styled.button`
  ${flexCenter}

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.orange3};
  width: 60%;
  height: 30px;
`;
