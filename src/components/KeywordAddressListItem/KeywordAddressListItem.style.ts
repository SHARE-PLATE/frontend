import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.mediumRegular};

    padding: 1rem 0;
    border-bottom: 1px solid ${colors.grey1};

    :last-child {
      border-bottom: none;
    }
  `}
`;

export const RoadName = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    display: flex;
    gap: 0.25rem;
    align-items: center;
    color: ${colors.grey4};
    margin-top: 0.4rem;

    ${fonts.smallLight};

    > :nth-child(1) {
      ${fonts.xSmallLight};
      color: ${colors.blue0};
      border: 1px solid ${colors.grey2};
      border-radius: 0.1rem;
      padding: 0.15rem 0.2rem;
    }
  `}
`;

export const noList = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.medium};
    ${flexCenter}
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    height: 100%;
    max-height: 30rem;
    white-space: pre;
    line-height: 1.2rem;
    color: ${colors.grey7};

    path {
      stroke: ${colors.grey4};
    }
  `}
`;
