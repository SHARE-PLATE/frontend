import { ReactElement, useState } from 'react';

import { Settings } from 'react-slick';

import * as S from './Carousel.style';

interface CarouselPropsType {
  settings: Settings;
  contents: ReactElement[];
  width?: number;
  height?: number;
}

const Carousel = ({ settings, contents, width = 100, height = 50 }: CarouselPropsType) => {
  const [current, setCurrent] = useState(0);
  const showedIndex = `${current + 1} / ${contents.length}`;

  const showCurIndex = (curIndex: number) => setCurrent(curIndex);

  return (
    <S.CarouselWrapper width={width} height={height}>
      <S.CarouselCount>{showedIndex}</S.CarouselCount>
      <S.CarouselSlider {...settings} afterChange={showCurIndex}>
        {contents}
      </S.CarouselSlider>
    </S.CarouselWrapper>
  );
};

export default Carousel;