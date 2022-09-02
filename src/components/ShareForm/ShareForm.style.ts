import styled from 'styled-components';

import { flexCenter } from '@styles/mixin';

//FileContainer.tsx
export const FileWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const FileLabel = styled.label`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey1};
  cursor: pointer;
  padding: 6px 25px;
  text-align: center;
  color: #000;
`;

export const FileForm = styled.input`
  display: none;
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
