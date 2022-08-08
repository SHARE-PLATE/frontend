import Slider from 'react-slick';
import styled, { css } from 'styled-components';

export const CarouselSlider = styled(Slider)`
  height: 100%;
  width: 100%;

  .slick-dots {
    // carousel 하단 점 아이콘 설정
    bottom: 0.5rem;

    button {
      ::before {
        opacity: 0.5;
        color: black;
      }
    }

    .slick-active {
      button {
        ::before {
          color: black;
        }
      }
    }
  }

  .slick-list,
  .slick-track,
  .slick-slide {
    height: 100%;
  }

  .slick-slide {
    > div {
      height: 100%;
    }
  }

  .slick-prev,
  .slick-next {
    height: 100%;
    z-index: 2;

    ::before {
      opacity: 0.5;
      color: black;
    }
  }

  .slick-prev {
    left: 0.5rem;
  }

  .slick-next {
    right: 0.5rem;
  }
`;

export const CarouselWrapper = styled.div<{ width: string; height: string }>`
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
    overflow: hidden;
    position: relative;
  `}
`;

export const CarouselCount = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small};
    z-index: 1;
    background-color: #00000059;
    color: ${colors.white2};
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: pre;
    position: absolute;
    width: 3.3rem;
    height: 1.5rem;
    right: 1rem;
    bottom: 1rem;
    border-radius: 1rem;
    padding: 0.4rem;
    padding-top: 0.3rem;
  `}
`;

export const ShowedIndexWrapper = styled.span`
  font-weight: 600;
`;
