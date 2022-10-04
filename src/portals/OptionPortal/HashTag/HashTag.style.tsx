import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const HashTagContainer = styled.div`
  ${flexBetween}
  align-items: flex-start;
`;

export const Title = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.medium}
    color: ${colors.grey4};
    padding-top: 15px;
  `}
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
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.large};
    display: flex;
    width: 100%;
    margin: 0;
    min-height: 100%;
    border: none;
    outline: none;
    padding: 0;
    padding-bottom: 12px;
    cursor: text;

    ::placeholder {
      color: ${colors.grey4};
      ${fonts.medium};
    }
    :focus {
      ::placeholder {
        color: transparent;
      }
    }
  `}
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
