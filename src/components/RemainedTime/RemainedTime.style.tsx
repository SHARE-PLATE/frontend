import styled, { css } from 'styled-components';

export interface RemainedTimeWrapperPropsType {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  backgroundColor?: string;
}

export const RemainedTimeWrapper = styled.div<RemainedTimeWrapperPropsType>`
  ${({ theme: { colors, fonts }, left, right, top, bottom, backgroundColor = '#0000007e' }) => css`
    ${fonts.xSmallBold}

    display: flex;
    position: absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    border-radius: 0.25rem;
    background-color: ${backgroundColor};
    width: 2.625rem;
    height: 1.36rem;
    align-items: center;
    justify-content: center;
    color: ${colors.white1};
  `}
`;
