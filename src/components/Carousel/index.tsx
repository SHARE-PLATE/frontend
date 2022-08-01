import { ReactElement } from 'react';

import { Settings } from 'react-slick';

import * as S from './Carousel.style';

interface CarouselPropsType {
  settings: Settings;
  contents: ReactElement[];
  width?: number;
  height?: number;
}

const Carousel = ({ settings, contents, width = 100, height = 50 }: CarouselPropsType) => {
  return (
    <S.CarouselWrapper width={width} height={height}>
      <S.CarouselSlider {...settings}>{contents}</S.CarouselSlider>
    </S.CarouselWrapper>
  );
};

export default Carousel;
