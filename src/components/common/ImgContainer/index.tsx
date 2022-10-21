import { useRef, useState } from 'react';

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

const ImgContainer = ({
  imgSrc,
  imgTitle,
  imgWrapperWidth,
  imgWrapperRatio,
  borderRadius,
  additionalStyle,
  noAlign,
}: ImgContainerPropsType) => {
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <S.Wrapper
      ref={imgWrapperRef}
      imgWrapperRatio={imgWrapperRatio}
      imgWrapperWidth={imgWrapperWidth}
      isLoaded={isLoaded}
      borderRadius={borderRadius}
      noAlign={noAlign}
      additionalStyle={additionalStyle}
    >
      <img src={imgSrc} alt={imgTitle} onLoad={() => setIsLoaded(true)} />
    </S.Wrapper>
  );
};

export default ImgContainer;
