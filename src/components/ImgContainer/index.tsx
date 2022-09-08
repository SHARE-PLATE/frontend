import { useEffect, useRef, useState } from 'react';

import { FlattenSimpleInterpolation } from 'styled-components';

import * as S from '@components/ImgContainer/ImgContainer.style';

type ImgContainerPropsType = {
  imgSrc: string;
  imgTitle: string;
  imgWrapperWidth: string;
  imgWrapperRatio: number;
  additionalStyle?: FlattenSimpleInterpolation;
};

const ImgContainer = ({
  imgSrc,
  imgTitle,
  imgWrapperWidth,
  imgWrapperRatio,
  additionalStyle,
}: ImgContainerPropsType) => {
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const [gapBetweenCenter, setGapBetweenCenter] = useState(0);
  const imgSize = new Image();
  imgSize.src = imgSrc;

  const { width, height } = imgSize;
  const imgRatio = width / height;
  const isImgRatioBigger = imgWrapperRatio <= imgRatio;

  useEffect(() => {
    const standardLength = isImgRatioBigger
      ? imgWrapperRef.current?.offsetWidth
      : imgWrapperRef.current?.offsetHeight;
    if (!standardLength) return;

    const newGapBetweenCenter =
      ((imgWrapperRatio - imgRatio) * standardLength) / 2 / (imgWrapperRatio * imgRatio);
    setGapBetweenCenter(newGapBetweenCenter);
  }, [imgWrapperRef]);

  return (
    <S.Wrapper
      ref={imgWrapperRef}
      isImgRatioBigger={isImgRatioBigger}
      imgWrapperRatio={imgWrapperRatio}
      imgWrapperWidth={imgWrapperWidth}
      additionalStyle={additionalStyle}
      gapBetweenCenter={gapBetweenCenter}
    >
      <img src={imgSrc} alt={imgTitle} />
    </S.Wrapper>
  );
};

export default ImgContainer;
