import styled from 'styled-components';

import { defaultPageStyle, flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}
`;
export const InputFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SubmitBtn = styled.button`
  ${flexCenter}
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background: #ff5c21;
`;
