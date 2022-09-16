import styled, { css } from 'styled-components';

export interface BottomStylesPositionType {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export const RemainedTimeWrapper = styled.div<BottomStylesPositionType>`
  ${({ theme: { colors, fonts }, left, right, top, bottom }) => css`
    ${fonts.xSmallBold}

    display: flex;
    position: absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    border-radius: 0.25rem;
    background-color: #0000007e;
    width: 2.625rem;
    height: 1.36rem;
    align-items: center;
    justify-content: center;
    color: ${colors.white1};
  `}
`;
