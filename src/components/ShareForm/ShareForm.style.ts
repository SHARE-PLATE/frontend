import styled from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const FileContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const FileLabel = styled.label`
  border-radius: 4px;
  background-color: #efefef;
  cursor: pointer;
  padding: 6px 25px;
  text-align: center;
  color: #000;
`;

export const FileForm = styled.input`
  display: none;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TowTextBlock = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
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
  height: 40px;
  line-height: 20px;
  letter-spacing: 1px;
`;

export const DescriptionWrapper = styled.div`
  min-height: 236px;
`;

export const ContentDescriptionInput = styled.textarea`
  width: 100%;
  min-height: 236px;
  resize: none;
`;
