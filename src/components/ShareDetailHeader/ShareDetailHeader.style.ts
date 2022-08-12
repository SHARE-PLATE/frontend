import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1.38 / 1;
  overflow: hidden;

  img {
    margin-top: -10%;
    /* 테스트 위치 조정. 이미지 크기에 따라 중앙 정렬되도록 수정 필요 */
    width: 100%;
  }
`;

export const IconsWrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding}
    z-index: 2;
    width: 100%;
    height: 3.25rem;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;

    path {
      stroke: ${colors.white1};
    }
  `}
`;
