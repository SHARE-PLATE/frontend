import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
  ${({ theme: { defaultPadding } }) => defaultPadding};
  display: flex;
  flex-direction: column-reverse;
  gap: 14px;
  height: 2.75rem;
  width: 100%;
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
  ${({ theme: { fonts } }) => css`
    ${fonts.largeRegular};
    text-align: center;
    width: 100%;
    height: 2.75rem;
  `}
`;

export const ConfirmButton = styled(BasicButton)`
  color: ${({ theme }) => theme.colors.orange2};
`;
