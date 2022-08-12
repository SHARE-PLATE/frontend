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

    left: ${left};
    right: ${right};
    top: ${top};
    bottom: ${bottom};

    display: inline-block;
    position: absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    border-radius: 0.4rem;
    background-color: ${colors.orange2};
    padding: 0.2rem 0.4rem;
    width: 2.5rem;
    text-align: center;
    color: ${colors.white1};
  `}
`;
