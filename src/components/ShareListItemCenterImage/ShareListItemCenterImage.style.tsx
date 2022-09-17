import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium}
    display: flex;
    width: 7.5rem;
    border-radius: 0.5rem;
    flex-direction: column;
    box-shadow: 4px 5px 5px #00000011;
  `}
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const ShareInfo = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium}

    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0.5rem 0.4rem;
    width: 100%
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    > h2 {
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
    }
  `}
`;
