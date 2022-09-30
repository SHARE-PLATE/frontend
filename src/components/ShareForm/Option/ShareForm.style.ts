import styled, { css } from 'styled-components';

import { flexBetween, flexCenter, noScrollBar } from '@styles/mixin';

//FileContainer.tsx
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
  text-align: center;
  padding: 0.625rem 0.75rem;
  width: 100%;
  height: 2.625rem;
  line-height: 20px;
  letter-spacing: 1px;
  ${({ theme }) => theme.fonts.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white2};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;

  //아이콘 숨기기
  &&[type='time']::-webkit-calendar-picker-indicator,
  &&[type='date']::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
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
