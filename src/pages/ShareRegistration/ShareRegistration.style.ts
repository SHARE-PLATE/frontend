import styled, { css } from 'styled-components';

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
  ${({ theme: { fonts, colors } }) => css`
    ${flexCenter};
    ${fonts.largeBold};
    background: ${colors.orange2};
    color: ${colors.white1};
    border-radius: 4px;
    width: 100%;
    height: 40px;
  `}
`;
