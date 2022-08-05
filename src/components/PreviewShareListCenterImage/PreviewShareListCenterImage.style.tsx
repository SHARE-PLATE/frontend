import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  overflow-y: scroll;
  width: 100%;
  padding: 1rem 0;
  gap: 0.75rem;
`;

export const Container = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium};
  `}
  display: flex;
  flex-direction: column;

  img {
    border-radius: 20px;
  }
`;

export const NoListContainer = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.grey4};
    ${fonts.medium};
  `}
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
  text-align: center;
  line-height: 1.2rem;
  white-space: pre;

  img {
    border-radius: 20px;
  }
`;

export const ShareInfo = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium};
  `}

  width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;

  > h2 {
    margin-top: 0.5rem;
    font-weight: 600;
  }
`;
