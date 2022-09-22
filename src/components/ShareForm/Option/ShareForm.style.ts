import styled, { css } from 'styled-components';

import { flexBetween, flexCenter, noScrollBar } from '@styles/mixin';

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

//default style
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

//TextContainer.tsx
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

//AddressContainer.tsx
export const LocationSelectButton = styled.button`
  ${flexBetween}
  flex-direction: row;
  padding: 0.625rem 0.75rem;
  width: 100%;
  height: 2.625rem;
  line-height: 20px;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.colors.white2};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
`;

export const NoneLocation = styled.span`
  ${({ theme }) => theme.fonts.mediumRegular}
  color: ${({ theme }) => theme.colors.grey4};
`;

//DateContainer.tsx
export const DateInputForm = styled.input`
  ${flexCenter}

  padding: 0.625rem 0.75rem;
  width: 100%;
  height: 2.625rem;
  line-height: 20px;
  letter-spacing: 1px;
  ${({ theme }) => theme.fonts.mediumBold};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white2};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
`;

//RecruitmentContainer.tsx
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

//ContentDescription.tsx
export const DescriptionWrapper = styled.div`
  min-height: 236px;
`;

export const ContentDescriptionInput = styled.textarea`
  width: 100%;
  min-height: 236px;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  background: ${({ theme }) => theme.colors.white2};
  border-radius: 4px;
  resize: none;
  :focus-visible {
    outline: none;
  }
`;
