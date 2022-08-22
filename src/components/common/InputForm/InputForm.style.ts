import styled from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  width: 100%;
`;

export const InputBox = styled.input`
  ${flexCenter}
  height: 40px;
  line-height: 20px;
  padding: 11px 16px;

  letter-spacing: 1px;
  width: 100%;
`;
