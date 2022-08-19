import styled, { css } from 'styled-components';

export const OuterWrapper = styled.div`
  position: relative;
  height: 5.5rem;
  overflow: hidden;
  width: 100%;
`;

export type MovingType = 'left' | 'right' | null;

export const InnerWrapper = styled.div<{ moving: MovingType }>`
  ${({ moving }) => css`
    ${moving === 'left' &&
    css`
      animation: 'slidein-left' 0.3s forwards;
    `}
    ${moving === 'right' &&
    css`
      animation: 'slideout-left' 0.3s forwards;
    `}
  `}

  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const ShowedWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 75%;
`;

export const ImgsWrapper = styled.div<{ count?: number }>`
  ${({ theme: { colors }, count = 1 }) => css`
    height: 3rem;
    width: 3rem;
    min-width: 3rem;
    position: relative;

    > div {
      position: absolute;
      border: 1.5px solid ${colors.white1};
      border-radius: 20rem;
      background-color: ${colors.grey3};

      ${count === 1 &&
      css`
        left: 0;
        top: 0;
        width: 3rem;
        height: 3rem;
      `}

      ${count === 2 &&
      css`
        width: 2.25rem;
        height: 2.25rem;
        :nth-child(1) {
          left: 0;
          top: 0;
        }
        :nth-child(2) {
          right: 0;
          bottom: 0;
        }
      `}

      ${count === 3 &&
      css`
        width: 1.88rem;
        height: 1.88rem;
        :nth-child(1) {
          left: 0;
          bottom: 0;
        }
        :nth-child(2) {
          right: 0;
          bottom: 0;
        }
        :nth-child(3) {
          left: calc((3rem - 1.88rem) / 2);
          top: 0;
        }
      `}

      ${count === 4 &&
      css`
        width: 1.47rem;
        height: 1.47rem;
        :nth-child(1) {
          left: 0;
          top: 0;
        }
        :nth-child(2) {
          right: 0;
          top: 0;
        }
        :nth-child(3) {
          left: 0;
          bottom: 0;
        }
        :nth-child(4) {
          right: 0;
          bottom: 0;
        }
      `}
    }
  `}
`;

export const ImgWrapper = styled.div`
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.2rem;
  justify-content: space-between;
  width: 100%;
`;

export const TextUpper = styled.div`
  display: flex;
  align-items: center;
`;

export const WritersNames = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 10rem;
`;

export const WritersCount = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small};
    padding-left: 0.2rem;
    color: ${colors.grey4};
  `}
`;

export const Time = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmall};
    padding-left: 0.3rem;
    color: ${colors.grey4};
    white-space: nowrap;
  `}
`;

export const Content = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.smallRegular};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70%;
  `}
`;

export const ShareImgWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.grey2};
    border-radius: 0.25rem;
    height: 3rem;
    width: 3rem;
    min-width: 3rem;
  `}
`;

export const ExitBtn = styled.button`
  ${({ theme: { colors } }) => css`
    color: ${colors.white1};
    background-color: ${colors.orange2};
    width: 5rem;
    min-width: 5rem;
    height: 100%;
  `}
`;
