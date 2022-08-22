import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ writtenByMe: boolean }>`
  display: flex;
  gap: 0.75rem;

  ${({ writtenByMe }) =>
    writtenByMe &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const ImgWrapper = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  min-width: 2.25rem;
  overflow: hidden;
  border-radius: 3rem;
  img {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Writer = styled.div<{ writtenByMe: boolean }>`
  ${({ theme: { fonts }, writtenByMe }) => css`
    ${fonts.small};
    ${writtenByMe &&
    css`
      text-align: right;
    `}

    line-height: 1.125rem;
  `}
`;

export const ContentsTimeWrapper = styled.div<{ writtenByMe: boolean }>`
  display: flex;
  gap: 0.4rem;

  ${({ writtenByMe }) =>
    writtenByMe &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const Contents = styled.div<{ writtenByMe: boolean }>`
  ${({ theme: { colors, fonts }, writtenByMe }) => css`
    ${fonts.smallRegular};
    line-height: 1.2rem;
    padding: 0.6rem;
    background-color: ${colors.grey2};
    border-radius: 0.5rem;
    border-top-left-radius: 0;

    ${writtenByMe &&
    css`
      background-color: ${colors.orange2};
      color: ${colors.white1};
      border-radius: 0.5rem;
      border-top-right-radius: 0;
    `}
  `}
`;

export const DateTime = styled.div<{ writtenByMe: boolean }>`
  ${({ theme: { colors, fonts }, writtenByMe }) => css`
    ${fonts.xSmallRegular};
    ${writtenByMe &&
    css`
      text-align: right;
    `}

    display: flex;
    min-width: 2.6rem;
    flex-direction: column;
    justify-content: end;
    color: ${colors.grey4};
  `}
`;
