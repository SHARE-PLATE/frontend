import Slider from 'react-slick';
import styled, { css } from 'styled-components';

export const CarouselSlider = styled(Slider)`
  width: 100%;
  height: 100%;

  .slick-dots {
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
    z-index: 2;
    height: 100%;

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
    position: relative;
    width: ${width};
    height: ${height};
    overflow: hidden;
  `}
`;

export const CarouselCount = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small}
    display: flex;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border-radius: 1rem;
    background-color: #00000059;
    padding: 0.4rem;
    padding-top: 0.3rem;
    width: 3.3rem;
    height: 1.5rem;
    white-space: pre;
    color: ${colors.white2};
  `}
`;

export const ShowedIndexWrapper = styled.span`
  font-weight: 600;
`;
