import * as S from '@components/ImgContainer/ImgContainer.style';

type ImgContainerPropsType = {
  imgSrc: string;
  imgTitle: string;
  imgWrapperWidth: string;
  imgWrapperRatio: number;
};

const ImgContainer = ({
  imgSrc,
  imgTitle,
  imgWrapperWidth,
  imgWrapperRatio,
}: ImgContainerPropsType) => {
  const imgSize = new Image();
  imgSize.src = imgSrc;

  const { width, height } = imgSize;
  const imgRatio = width / height;
  const isImgRatioBigger = imgWrapperRatio <= imgRatio;

  return (
    <S.Wrapper
      isImgRatioBigger={isImgRatioBigger}
      imgWrapperRatio={imgWrapperRatio}
      imgWrapperWidth={imgWrapperWidth}
    >
      <img src={imgSrc} alt={imgTitle} />
    </S.Wrapper>
  );
};

export default ImgContainer;
