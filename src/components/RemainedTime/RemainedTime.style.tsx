import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export interface RemainedTimeWrapperPropsType {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  backgroundColor?: string;
}

export const RemainedTimeWrapper = styled.div<RemainedTimeWrapperPropsType>`
  ${({ theme: { colors, fonts }, left, right, top, bottom, backgroundColor = '#0000007e' }) => css`
    ${fonts.xSmall}
    font-weight: 500;
    ${flexCenter}

    position: absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    border-radius: 0.25rem;
    background-color: ${backgroundColor};
    width: 2.625rem;
    height: 1.36rem;
    color: ${colors.white1};
    line-height: 15px;
    letter-spacing: -0.3px;
  `}
`;
