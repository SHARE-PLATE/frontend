import * as S from '@components/PreviewShareListBigSizeImage/PreviewShareListBigSizeImage.style';
import { RemainedTime } from '@components/RemainedTime';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { listExampleType } from '@data/shareList';
interface PreviewShareListBigSizeImagePropsType {
  data: listExampleType[];
}

const PreviewShareListBigSizeImage = ({ data }: PreviewShareListBigSizeImagePropsType) => {
  return (
    <>
      {data.map((item) => (
        <S.Wrapper key={item.id}>
          <S.ImageContainer>
            <img src={item.thumbnailUrl} alt={item.title} width='330' height='100' />
            <RemainedTime targetTime={item.appointmentDateTime} />
          </S.ImageContainer>
          <S.Container>
            <S.TextContainer>
              <S.ImageTitle>{item.title}</S.ImageTitle>
              <PersonnelStatus curPersonnel={1} totalPersonnel={4} />
            </S.TextContainer>
            <S.ImagePriceBlock>
              <S.ImagePrice>
                {item.price}원<S.ImageOriginalPrice>원가 {item.originalPrice}</S.ImageOriginalPrice>
              </S.ImagePrice>
            </S.ImagePriceBlock>
          </S.Container>
        </S.Wrapper>
      ))}
    </>
  );
};

export default PreviewShareListBigSizeImage;
