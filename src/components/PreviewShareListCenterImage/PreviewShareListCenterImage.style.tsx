import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 1rem 0;
  width: 100%;
  overflow-y: scroll;
`;

export const Container = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium}
    display: flex;
    flex-direction: column;

    img {
      border-radius: 20px;
    }
  `}
`;

export const NoListContainer = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.medium}

    display: flex;
    flex-direction: column;
    padding: 2.5rem 0;
    text-align: center;
    line-height: 1.2rem;
    white-space: pre;
    color: ${colors.grey7};

    img {
      border-radius: 20px;
    }
  `}
`;

export const ShareInfo = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium}

    width: 110px;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;

    > h2 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  `}
`;
