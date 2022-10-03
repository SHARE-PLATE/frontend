import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteAllBtn = styled.button`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.large};
    color: ${colors.grey4};
  `}
`;

export const ErrorWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.grey7};
    ${flexCenter}
    flex-grow: 1;
  `}
`;

export const LoadingWrapper = styled.div`
  padding: 2rem 0;
`;
