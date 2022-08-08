import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, defaultWidth } }) => css`
    ${defaultPadding};
    ${defaultWidth};
  `}
`;

export const MentionWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    margin-top: 2rem;
    ${fonts.xLargeBold};
  `}
`;

export const ListWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  height: fit-content;
  width: 100%;
  overflow-x: scroll;
  gap: 0.8rem;

  ::-webkit-scrollbar-track {
    color: transparent;
  }
`;

export const noListWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.grey4};
    display: flex;
    height: 10rem;
    align-items: center;
    line-height: 1.5rem;
    justify-content: center;
    text-align: center;
    white-space: pre;
  `}
`;
