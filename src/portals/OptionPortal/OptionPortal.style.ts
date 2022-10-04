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

export const OptionButton = styled.button<{ isSelected: boolean }>`
  ${({ theme: { colors, fonts }, isSelected }) => css`
    ${fonts.mediumBold}

    width: 118px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.3s;
    border: solid 1px ${isSelected ? colors.orange4 : colors.grey3};
    color: ${isSelected ? colors.white0 : colors.grey4};
    background-color: ${isSelected ? colors.orange4 : colors.white2};
  `}
`;

//HashTag.tsx
export const HashTagContainer = styled.div`
  ${flexBetween}
  align-items: flex-start;

  > :first-child {
    padding-top: 11px;
  }
`;

export const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: 104px;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 4px;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.orange3};
  }
`;

export const TagInput = styled.input`
  display: flex;
  width: 100%;
  min-height: 100%;
  border: none;
  outline: none;
  padding-bottom: 12px;
  cursor: text;
`;

export const TagsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  padding: 2px 8px;
  color: ${({ theme }) => theme.colors.white1};
  background-color: ${({ theme }) => theme.colors.orange3};
  border-radius: 4px;
  ${({ theme }) => theme.fonts.smallBold}
  font-weight: 700;
  font-size: 12px;
`;

export const FinishButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 4px;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.orange3};
  color: ${({ theme }) => theme.colors.white1};
  ${({ theme }) => theme.fonts.largeBold}
`;
