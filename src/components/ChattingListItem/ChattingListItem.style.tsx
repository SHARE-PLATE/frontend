import styled, { css } from 'styled-components';

export const OuterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 5.5rem;
  overflow: hidden;
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

  display: flex;
  position: absolute;
  left: 0;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const ShowedWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 75%;
`;

export const ImgsWrapper = styled.div<{ count?: number }>`
  ${({ theme: { colors }, count = 1 }) => css`
    position: relative;
    width: 3rem;
    min-width: 3rem;
    height: 3rem;

    > div {
      position: absolute;
      border: 1.5px solid ${colors.white1};
      border-radius: 20rem;
      background-color: ${colors.grey3};

      ${count === 1 &&
      css`
        top: 0;
        left: 0;
        width: 3rem;
        height: 3rem;
      `}

      ${count === 2 &&
      css`
        width: 2.25rem;
        height: 2.25rem;
        :nth-child(1) {
          top: 0;
          left: 0;
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
          bottom: 0;
          left: 0;
        }
        :nth-child(2) {
          right: 0;
          bottom: 0;
        }
        :nth-child(3) {
          top: 0;
          left: calc((3rem - 1.88rem) / 2);
        }
      `}

      ${count === 4 &&
      css`
        width: 1.47rem;
        height: 1.47rem;
        :nth-child(1) {
          top: 0;
          left: 0;
        }
        :nth-child(2) {
          top: 0;
          right: 0;
        }
        :nth-child(3) {
          bottom: 0;
          left: 0;
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
  justify-content: space-between;
  width: 100%;
  height: 2.2rem;
`;

export const TextUpper = styled.div`
  display: flex;
  align-items: center;
`;

export const WritersNames = styled.div`
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const WritersCount = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small}
    padding-left: 0.2rem;
    color: ${colors.grey4};
  `}
`;

export const Time = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmall}

    padding-left: 0.3rem;
    white-space: nowrap;
    color: ${colors.grey4};
  `}
`;

export const Content = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.smallRegular}

    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const ShareImgWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    border-radius: 0.25rem;
    background-color: ${colors.grey2};
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
  `}
`;

export const ExitBtn = styled.button`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.orange2};
    width: 5rem;
    min-width: 5rem;
    height: 100%;
    color: ${colors.white1};
  `}
`;
