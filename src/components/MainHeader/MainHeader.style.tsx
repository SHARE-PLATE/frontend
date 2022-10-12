import styled, { css } from 'styled-components';

import { flexBetween, flexCenter } from '@styles/mixin';

type IconsWrappersPropsType = {
  position: 'left' | 'flex-end' | 'space-between' | 'right';
  isRightAngle?: boolean;
  rightAngleTarget?: number;
};

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, defaultWidth, defaultHeaderHeight } }) => css`
    ${flexBetween}
    ${defaultPadding}
    ${defaultWidth}

    width: 100%;
    height: ${defaultHeaderHeight}rem;
  `}
`;

export const HeaderAddressWrapper = styled.div``;

export const IconsWrapper = styled.div<IconsWrappersPropsType>`
  ${({ position, isRightAngle, rightAngleTarget }) => css`
    display: flex;
    align-items: center;
    justify-content: ${position};
    width: 3.625rem;
    gap: 0.625rem;

    > :nth-child(${rightAngleTarget}) {
      transition: all 0.3s;

      ${isRightAngle &&
      css`
        transform: rotate(0.25turn);
      `}
    }
  `}
`;

export const Header = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.large};
    ${flexCenter}
    flex-grow: 1;
    height: 100%;
  `}
`;
