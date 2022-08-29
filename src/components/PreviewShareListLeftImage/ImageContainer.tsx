import ExpirationDate from '@components/PreviewShareListLeftImage/ExpirationDate';
import * as S from '@components/PreviewShareListLeftImage/PreviewShareListLeftImage.style';
import { RemainedTime } from '@components/RemainedTime';

interface ImageContainerPropsType {
  url: string;
  date: string;
  isDone?: boolean;
}

const ImageContainer = ({ url, date, isDone }: ImageContainerPropsType) => {
  return (
    <S.ImgWrapper>
      <img src={url} alt='이미지' />
      {isDone ? (
        <ExpirationDate />
      ) : (
        <RemainedTime targetTime={date} position={{ top: '0.5rem', left: '0.5rem' }} />
      )}
    </S.ImgWrapper>
  );
};

export default ImageContainer;
