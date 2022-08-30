import styled, { css } from 'styled-components';

import { CurrentShareListType } from '@store/filterShareList';
import { flexCenter } from '@styles/mixin';

type TabWrapperPropsType = {
  active: boolean;
  value: CurrentShareListType;
};

export const tabsHeight = '2.6rem';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.nav`
  ${({ theme: { colors } }) => css`
    ${flexCenter}

    border-bottom: 0.125rem solid ${colors.grey2};
    width: 50%;
    height: ${tabsHeight};
  `}
`;

export const TabWrapper = styled.div<TabWrapperPropsType>`
  ${({ theme: { colors }, active, value }) => css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 50%;
    height: 100%;
    transition: 0.3s ease-out;

    ${active
      ? css`
          font-weight: ${({ theme }) => theme.fonts.smallBold};
        `
      : css`
          font-weight: ${({ theme }) => theme.fonts.small};
          color: ${({ theme }) => theme.colors.grey2};
        `}

    ::after {
      position: absolute;
      transition: 0.3s ease-out;
      border-bottom: solid 0.125rem ${colors.orange2};
      width: 100%;
      height: 2.6rem;
      content: '';

      ${value === 'delivery' &&
      css`
        left: 100%;
        pointer-events: none;
      `}

      ${value === 'ingredient' &&
      css`
        left: -100%;
        pointer-events: none;
      `}

      ${active &&
      css`
        left: 0;
      `}
    }
  `}
`;
