import styled, { css } from 'styled-components';

import { defaultPageStyle, flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}
`;

export const ListHeader = styled.header`
  ${({ theme }) => theme.defaultWidth}

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white1};
  padding: 0;
  width: 100%;

  > :first-child,
  > :last-child {
    padding: 0 1rem;
  }
`;

export const ListContent = styled.div`
  margin-top: 120px;
`;

export const AddKeywordButton = styled.button`
  ${flexCenter}
  flex-direction: row;
  gap: 4px;
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%);
  width: 10.75rem;
  /* width: 48%; */
  height: 2.625rem;
  background: ${({ theme }) => theme.colors.orange2};
  box-shadow: 2px 4px 8px rgba(255, 69, 58, 0.2);
  border-radius: 1.25rem;
`;

export const KeywordContent = styled.span`
  ${({ theme: { fonts, colors } }) => css`
    margin-left: 0.25rem;
    ${fonts.largeBold};
    color: ${colors.white0};
  `}
`;
export const Text = styled.span`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.largeRegular};
    color: ${colors.white0};
  `}
`;
