import styled, { css } from 'styled-components';

import { CurrentShareListType } from '@store/filterShareList';
import { flexCenter } from '@styles/mixin';

type TabWrapperPropsType = {
  active: boolean;
  value: CurrentShareListType;
};

export const tabsHeight = '2.6rem';

export const Wrapper = styled.nav`
  ${({ theme: { colors } }) => css`
    ${flexCenter};

    width: 100%;
    height: ${tabsHeight};
    border-bottom: 0.125rem solid ${colors.grey2};
  `}
`;

export const TabWrapper = styled.div<TabWrapperPropsType>`
  ${({ theme: { colors }, active, value }) => css`
    height: 100%;
    display: flex;
    position: relative;
    cursor: pointer;
    width: 50%;
    justify-content: center;
    align-items: center;

    ::after {
      position: absolute;
      transition: 0.3s ease-out;
      height: 2.6rem;
      border-bottom: solid 0.125rem ${colors.orange2};
      width: 100%;
      content: '';
    }

    ${value === 'delivery' &&
    css`
      ::after {
        pointer-events: none;
        left: 100%;
      }
    `}

    ${value === 'ingredient' &&
    css`
      ::after {
        pointer-events: none;
        left: -100%;
      }
    `}

    ${active &&
    css`
      ::after {
        left: 0;
      }
    `}
  `}
`;
