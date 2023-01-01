import styled, { css } from 'styled-components';

import { flexCenter, noScrollBar } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { defaultWidth } }) => css`
    ${defaultWidth}
    padding-left: 1rem;
    padding-top: 0.25rem;
  `}
`;

export const ListWrapper = styled.div`
  ${noScrollBar}

  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  padding-bottom: 2rem;
  width: 100%;
  height: fit-content;
  overflow-x: scroll;
  padding-right: 1rem;
`;

export const ErrorWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    ${flexCenter}
    text-align: center;
    height: 10rem;
    line-height: 1.5rem;
    white-space: pre;
    color: ${colors.grey4};
  `}
`;
