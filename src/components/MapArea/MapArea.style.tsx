import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`;

export const Map = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export const ButtonsWrapper = styled.div`
  ${flexCenter};

  width: 100%;
  position: absolute;
  top: 20px;
  z-index: 2;
`;

export const RescanButton = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular};
    ${flexCenter};

    gap: 0.49rem;
    color: ${colors.white0};
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
    width: 7.37rem;
    height: 2.25rem;
    border-radius: 100px;
    background-color: ${colors.orange2};
  `}
`;

export const TargetButton = styled.button`
  ${({ theme: { colors } }) => css`
    ${flexCenter};

    position: absolute;
    right: 1rem;
    box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.12);
    background-color: ${colors.white0};
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 10rem;
  `}
`;
