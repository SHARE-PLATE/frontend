import styled from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  width: 100%;
`;

export const InputBox = styled.input`
  ${flexCenter}

  padding: 11px 16px;
  width: 100%;
  height: 41px;
  line-height: 20px;

  letter-spacing: 1px;
`;
