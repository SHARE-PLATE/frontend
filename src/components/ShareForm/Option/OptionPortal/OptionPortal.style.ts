import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const PortalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 1.5rem;
`;

export const OptionTitle = styled.header`
  ${({ theme: { fonts } }) => css`
    ${fonts.xLargeBold}
    line-height: 27px;
    margin-bottom: 1rem;
  `}
`;

export const ConferenceContainer = styled.div`
  ${flexBetween}
  flex-direction: row;
`;

export const CategoryTitle = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.medium}
    color: ${colors.grey4};
  `}
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 0.75rem;
`;

//HashTag.tsx
export const HashTagContainer = styled.div`
  ${flexBetween}
`;

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 250px;
  min-height: 100px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 4px;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.orange3};
  }
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  margin: 5px;
  padding: 2px 8px;
  color: ${({ theme }) => theme.colors.white1};
  background-color: ${({ theme }) => theme.colors.orange3};
  border-radius: 4px;
  ${({ theme }) => theme.fonts.smallBold}
  font-weight: 700;
  font-size: 12px;
`;

export const TagInput = styled.input`
  display: inline-flex;
  min-width: 235px;
  border: none;
  outline: none;
  cursor: text;
`;

export const SelectButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 4px;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.orange3};
  color: ${({ theme }) => theme.colors.white1};
  ${({ theme }) => theme.fonts.largeBold}
`;
