import styled from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  width: 100%;
`;

export const InputBox = styled.input`
  ${flexCenter}
  padding: 0.625rem 0.75rem;
  width: 100%;
  height: 2.625rem;
  line-height: 20px;
  letter-spacing: 1px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  background: ${({ theme }) => theme.colors.white2};
  border-radius: 4px;

  :focus-visible {
    outline: none;
  }
`;
