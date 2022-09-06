import styled, { css } from 'styled-components';

import { flexCenter, noScrollBar } from '@styles/mixin';

//FileContainer.tsx
export const FileWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 15px;
  overflow: scroll;
  scroll-behavior: smooth;
  ${noScrollBar}
`;

export const FileLabel = styled.label<{ isFile?: number }>`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey1};
  cursor: pointer;
  padding: 6px 25px;
  text-align: center;
  ${({ isFile }) => css`
    ${isFile &&
    css`
      path {
        fill: ${({ theme }) => theme.colors.orange3};
      }
    `}
  `}
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
    top: -3px;
    right: -7px;
  }
`;

export const ImagePreview = styled.img`
  width: 76px;
  height: 59px;
`;

//TextContainer.tsx
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TowTextBlock = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
`;

export const LongTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DateInputForm = styled.input`
  ${flexCenter}

  padding: 11px 16px;
  width: 100%;
  height: 41px;
  line-height: 20px;
  letter-spacing: 1px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
`;

export const LocationSelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 11px 16px;
  width: 100%;
  height: 41px;
  line-height: 20px;
  letter-spacing: 1px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(50% - 6px);
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  ${flexCenter}

  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
`;

export const CountButton = styled.button`
  padding: 3px 10px;
  margin-top: 5px;
`;

export const OptionContainer = styled.div`
  height: 41px;
`;

//ContentDescription.tsx
export const DescriptionWrapper = styled.div`
  min-height: 236px;
`;

export const ContentDescriptionInput = styled.textarea`
  width: 100%;
  min-height: 236px;
  resize: none;
`;
