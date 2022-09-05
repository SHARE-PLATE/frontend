import { ReactElement, useState } from 'react';

import { Settings } from 'react-slick';

import * as S from '@components/Carousel/Carousel.style';

interface CarouselPropsType {
  settings: Settings;
  contents: ReactElement[];
  width?: string;
  height?: string;
}

const Carousel = ({ settings, contents, width = '100%', height = '6rem' }: CarouselPropsType) => {
  const [current, setCurrent] = useState(0);

  const showCurIndex = (curIndex: number) => setCurrent(curIndex);

  return (
    <S.CarouselWrapper width={width} height={height}>
      <S.CarouselCount>
        <S.ShowedIndexWrapper>{current + 1}</S.ShowedIndexWrapper>
        {` / ${contents.length}`}
      </S.CarouselCount>
      <S.CarouselSlider {...settings} afterChange={showCurIndex}>
        {contents}
      </S.CarouselSlider>
    </S.CarouselWrapper>
  );
};

export default Carousel;
