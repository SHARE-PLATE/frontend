import styled, { css } from 'styled-components';

import { noScrollBar } from '@styles/mixin';

export const FileWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: calc(100% + 1rem);
  padding-top: 15px;
  padding-right: 1rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
  ${noScrollBar}
`;

export const FileLabel = styled.label<{ isImage: boolean }>`
  ${({ theme: { colors, fonts }, isImage }) => css`
    ${fonts.smallRegular};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    cursor: pointer;
    width: 4.5rem;
    min-width: 4.5rem;
    height: 4.5rem;
    background-color: ${colors.white2};
    border: 1px solid ${colors.grey2};
    border-radius: 4px;
    path {
      fill: ${isImage && colors.orange2};
    }
  `}
`;

export const FileCount = styled.div`
  color: ${({ theme }) => theme.colors.grey4};
`;

export const FileLength = styled.span<{ isFile?: number }>`
  ${({ isFile }) => css`
    ${isFile &&
    css`
      color: ${({ theme }) => theme.colors.orange3};
    `}
  `}
`;

export const FileForm = styled.input`
  display: none;
`;

export const ImagePreviewContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: -4px;
    right: -4px;
  }
`;
