import styled from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const FileContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const FileLabel = styled.label`
  padding: 6px 25px;
  background-color: #efefef;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  text-align: center;
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
  justify-content: space-between;
  gap: 12px;
`;

export const LongTextBlock = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const DateInputForm = styled.input`
  ${flexCenter}
  height: 40px;
  line-height: 20px;
  padding: 11px 16px;

  letter-spacing: 1px;
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  min-height: 236px;
`;

export const ContentDescriptionInput = styled.textarea`
  min-height: 236px;
  width: 100%;
  resize: none;
`;
