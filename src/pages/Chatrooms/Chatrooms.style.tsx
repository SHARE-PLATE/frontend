import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding};
    background-color: ${colors.white1};
    flex-grow: 1;
  `}
`;

export const ContentWrapper = styled.div``;

export const LoadingWrapper = styled.div`
  padding: 5rem 0;
`;
