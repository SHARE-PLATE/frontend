import styled from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  width: 45rem;
  height: 2.75rem;
  @media (max-width: 27rem) {
    width: 20.5rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors.white0};

  > :nth-child(2) {
    border-top: 1px solid ${({ theme }) => theme.colors.grey2};
  }
`;

export const BasicButton = styled.button`
  text-align: center;
  width: 100%;
  height: 2.75rem;
`;

export const ConfirmButton = styled(BasicButton)`
  color: ${({ theme }) => theme.colors.orange2};
`;
