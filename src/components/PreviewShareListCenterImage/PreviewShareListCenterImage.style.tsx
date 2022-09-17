import styled, { css } from 'styled-components';

import { noScrollBar } from '@styles/mixin';

export const Wrapper = styled.div`
  ${noScrollBar}

  display: flex;
  gap: 0.75rem;
  padding: 1rem 0;
  width: calc(100% + 1rem);
  overflow-y: scroll;

  > :last-child {
    margin-right: 1rem;
  }
`;

export const Container = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium}
    display: flex;
    border-radius: 0.5rem;
    flex-direction: column;
    box-shadow: 4px 5px 5px #00000011;
  `}
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const NoListContainer = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.medium}

    display: flex;
    flex-direction: column;
    padding: 2.5rem 0;
    text-align: center;
    line-height: 1.2rem;
    white-space: pre;
    width: calc(100% - 1rem);
    color: ${colors.grey7};
  `}
`;

export const ShareInfo = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium}

    padding: 0.5rem 0.4rem;
    width: 110px;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;

    > h2 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  `}
`;
