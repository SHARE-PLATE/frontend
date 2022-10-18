import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteAllBtn = styled.button<{ isDeleteMode: boolean }>`
  ${({ theme: { fonts, colors }, isDeleteMode }) => css`
    ${fonts.large};

    transition: height 0.3s;
    height: ${isDeleteMode ? '44px' : '0px'};
    background-color: ${colors.grey2};
    color: ${colors.black};
    margin-left: -1rem;
    width: calc(100% + 2rem);
    overflow: hidden;
  `}
`;

export const ErrorWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.grey7};
    ${flexCenter}
    flex-grow: 1;
  `}
`;

export const LoadingWrapper = styled.div`
  padding: 2rem 0;
`;
