import styled, { css } from 'styled-components';

import { flexBetween, flexCenter } from '@styles/mixin';

export const ModalWrapper = styled.div`
  ${flexCenter}

  flex-direction: column;
  padding: 0 5px;
  width: 17rem;
  height: 8rem;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
`;

export const Text = styled.p`
  ${({ theme: { colors } }) => css`
    font-size: 13px;
    line-height: 19.24px;
    padding-bottom: 1rem;
    white-space: pre;
    text-align: center;
    color: ${colors.black};
  `}
`;

export const ButtonContainer = styled.div`
  ${flexBetween}
  gap: 12px;
`;

export const CloseButton = styled.button`
  ${flexCenter}
  border-radius: 4px;
  background: inherit;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  color: ${({ theme }) => theme.colors.grey4};
  width: 118px;
  height: 42px;
`;

export const OkButton = styled.button`
  ${flexCenter}
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.orange3};
  color: ${({ theme }) => theme.colors.white1};
  width: 118px;
  height: 42px;
`;
