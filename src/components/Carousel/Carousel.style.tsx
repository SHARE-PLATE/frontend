import Slider from 'react-slick';
import styled, { css } from 'styled-components';

export type SlideType = 'side' | 'vertical' | undefined;

import { flexCenter } from '@styles/mixin';
export const CarouselSlider = styled(Slider)<{ type: SlideType }>`
  width: 100%;
  height: 100%;
  overflow: visible !important;

  .slick-dots {
    bottom: calc(2rem - 5px);

    button {
      ::before {
        color: ${({ theme }) => theme.colors.white0};
        font-size: 10px;
        opacity: 1;
      }
    }

    .slick-active {
      button {
        ::before {
          opacity: 1;
          color: ${({ theme }) => theme.colors.orange6};
        }
      }
    }

    > li {
      margin: 0;
    }
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

  ${({ type }) =>
    type === 'side' &&
    css`
      .slick-list {
        overflow: visible !important;
        margin-right: -10px;
      }

      .slick-track {
        display: flex;
      }

      .slick-slide {
        margin-right: 10px;
      }
    `}

  ${({ type }) =>
    type === 'vertical' &&
    css`
      .slick-list {
        position: relative;
        overflow: hidden;
      }
    `}
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
