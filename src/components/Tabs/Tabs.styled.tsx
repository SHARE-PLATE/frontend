import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

type TabWrapperPropsType = {
  active: boolean;
  order: number;
};

export const tabsHeight = '2.6rem';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding } }) => css`
    ${defaultPadding};
    display: flex;
    justify-content: flex-start;
    height: ${tabsHeight};
    gap: 1.25rem;
  `}
`;

export const TabWrapper = styled.div<TabWrapperPropsType>`
  ${({ theme: { colors, fonts }, active, order }) => css`
    ${flexCenter}
    position: relative;
    cursor: pointer;
    height: 100%;
    transition: 0.3s ease-out;
    font-weight: ${active ? fonts.smallBold : fonts.small};
    color: ${!active && colors.grey2};

    ::after {
      position: absolute;
      transition: 0.3s ease-out;
      border-bottom: solid 0.125rem ${colors.orange2};
      width: 100%;
      height: 2.6rem;
      content: '';

      ${order === 0 &&
      css`
        left: calc(100% + 1.25rem);
        pointer-events: none;
      `}

      ${order === 1 &&
      css`
        left: calc(-100% - 1.25rem);
        pointer-events: none;
      `}

      ${active &&
      css`
        left: 0;
      `}
    }
  `}
`;
