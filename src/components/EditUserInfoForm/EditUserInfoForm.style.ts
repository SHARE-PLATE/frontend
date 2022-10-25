import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

type SetCheckType = { isSet: boolean };

export const FormWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  padding-top: 1rem;
`;

export const ImgWrapper = styled.div<SetCheckType>`
  ${flexCenter}
  position: relative;
  width: 5.375rem;
  height: 5.375rem;

  ${({ isSet, theme: { colors } }) =>
    !isSet &&
    css`
      opacity: 0.25;
      background-color: ${colors.orange0};
      border-radius: 10rem;
    `}
`;

export const IconBackground = styled.div`
  ${flexCenter}
  position: absolute;
  top: 3.5rem;
  left: 60%;
  width: 39px;
  height: 39px;
  border-radius: 10rem;
  background: ${({ theme }) => theme.colors.grey2};
`;

export const NickNameWrapper = styled.div`
  width: 100%;
  margin-top: 0.75rem;

  input {
    font-weight: 300;
  }
`;

export const NickNameTitle = styled.h3`
  ${({ theme }) => theme.fonts.largeBold}
  margin-bottom:1rem;
`;
