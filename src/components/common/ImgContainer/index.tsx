import { useEffect, useRef, useState } from 'react';

import { FlattenSimpleInterpolation } from 'styled-components';

import * as S from '@components/common/ImgContainer/ImgContainer.style';

type ImgContainerPropsType = {
  imgSrc: string;
  imgTitle: string;
  imgWrapperWidth: string;
  imgWrapperRatio: number;
  standard?: S.SamePartType;
  noAlign?: boolean;
  borderRadius?: string;
  additionalStyle?: FlattenSimpleInterpolation;
};

type ImgSizeType = { width: number; height: number };

const ImgContainer = ({
  imgSrc,
  imgTitle,
  imgWrapperWidth,
  imgWrapperRatio,
  standard,
  noAlign,
  borderRadius,
  additionalStyle,
}: ImgContainerPropsType) => {
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const [gapBetweenCenter, setGapBetweenCenter] = useState<number | undefined>();
  const [samePart, setSamePart] = useState<S.SamePartType>(null);
  const [imgSize, setImgSize] = useState<ImgSizeType>();
  const imgValue = new Image();

  imgValue.src = imgSrc;
  imgValue.onload = () => {
    const { width, height } = imgValue;
    const isSameValue = imgSize?.width === width && imgSize?.height === height;
    if (!isSameValue) setImgSize({ width, height });
  };

  const alignCenter = () => {
    if (!imgSize) return;

    const { width, height } = imgSize;
    if (!width || !height) return;

    const imgRatio = width / height;
    const isImgRatioBigger = imgWrapperRatio >= imgRatio;
    const standardLengthName = isImgRatioBigger ? 'WIDTH' : 'HEIGHT';
    const standardLength = isImgRatioBigger
      ? imgWrapperRef.current?.offsetWidth
      : imgWrapperRef.current?.offsetHeight;
    if (!standardLength) return;

    const newGapBetweenCenter =
      ((imgWrapperRatio - imgRatio) * standardLength) / (imgWrapperRatio * imgRatio) / 2;

    setSamePart(standard || standardLengthName);
    setGapBetweenCenter(newGapBetweenCenter);
  };

  useEffect(() => {
    if (!noAlign) alignCenter();
  }, [imgSize]);

  return (
    <S.Wrapper
      ref={imgWrapperRef}
      samePart={samePart}
      imgWrapperRatio={imgWrapperRatio}
      imgWrapperWidth={imgWrapperWidth}
      borderRadius={borderRadius}
      noAlign={noAlign}
      additionalStyle={additionalStyle}
      gapBetweenCenter={gapBetweenCenter}
    >
      <img src={imgSrc} alt={imgTitle} />
    </S.Wrapper>
  );
};

export default ImgContainer;
