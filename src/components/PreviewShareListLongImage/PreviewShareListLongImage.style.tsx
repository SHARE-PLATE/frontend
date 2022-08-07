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
  margin-top: 1rem;
  overflow-y: scroll;
  width: 100%;
  gap: 0.8rem;
`;
