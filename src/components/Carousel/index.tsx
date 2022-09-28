import { ReactElement, useState } from 'react';

import { Settings } from 'react-slick';

import * as S from '@components/Carousel/Carousel.style';

interface CarouselPropsType {
  settings: Settings;
  contents: ReactElement[];
  type?: S.SlideType;
  isCount?: boolean;
  width?: string;
  height?: string;
}

const Carousel = ({
  settings,
  contents,
  type,
  isCount = true,
  width = '100%',
  height = '6rem',
}: CarouselPropsType) => {
  const [current, setCurrent] = useState(0);
  const showCurIndex = (curIndex: number) => setCurrent(curIndex);

  return (
    <S.CarouselWrapper width={width} height={height}>
      {isCount && (
        <S.CarouselCount>
          <S.ShowedIndexWrapper>{current + 1}</S.ShowedIndexWrapper>
          {` / ${contents.length}`}
        </S.CarouselCount>
      )}
      <S.CarouselSlider {...settings} type={type} afterChange={showCurIndex}>
        {contents}
      </S.CarouselSlider>
    </S.CarouselWrapper>
  );
};

export default Carousel;
