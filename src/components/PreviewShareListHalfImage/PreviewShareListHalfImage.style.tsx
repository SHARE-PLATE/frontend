import styled, { css } from 'styled-components';

import { subTitle } from '@styles/mixin';

export const Wrapper = styled.div`
  padding-bottom: 2.5rem;
`;

export const TitleWrapper = styled.div`
  ${subTitle}

  display: flex;
  justify-content: space-between;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  padding-top: 1rem;
  width: 100%;
`;

export const noListWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    text-align: center;
    line-height: 1.5rem;
    white-space: pre;
    color: ${colors.grey4};
  `}
`;

export const showMoreBtn = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small}

    color: ${colors.grey4};
    font-weight: 500;
  `}
`;
