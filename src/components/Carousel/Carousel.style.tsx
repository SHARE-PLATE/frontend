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

export const CarouselWrapper = styled.div<{ width: number; height: number }>`
  ${({ width, height }) => css`
    width: ${width}%;
    height: ${height}%;
    overflow: hidden;
    position: relative;
  `}
`;

export const CarouselCount = styled.div`
  position: absolute;
  width: 4rem;
  display: block;
  left: 1rem;
  top: 1rem;
  border-radius: 1rem;
  padding: 1rem 0.5rem;
  font-size: 0.8rem;
  background-color: black;
  color: white;
  text-align: center;
`;
