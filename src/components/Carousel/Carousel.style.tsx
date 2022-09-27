import Slider from 'react-slick';
import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';
export const CarouselSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  overflow: visible !important;

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

  .slick-list {
    overflow: visible !important;
    margin-right: -10px;
  }

  .slick-slide {
    margin-right: 10px;
  }

  .slick-track {
    display: flex;
  }
`;

export const CarouselWrapper = styled.div<{ width: string; height: string }>`
  ${({ width, height }) => css`
    position: relative;
    width: ${width};
    height: ${height};
    border-radius: 8px;
  `}
`;

export const CarouselCount = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.smallLight}
    ${flexCenter}
    position: absolute;
    right: 0.75rem;
    bottom: 1rem;
    z-index: 1;
    border-radius: 1rem;
    background: #353535b2;
    padding: 0.4rem;
    padding-top: 0.3rem;
    width: 3.375rem;
    height: 1.375rem;
    white-space: pre;
    color: ${colors.white2};
  `}
`;

export const ShowedIndexWrapper = styled.span`
  font-weight: 500;
`;
