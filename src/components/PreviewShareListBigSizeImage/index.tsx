import * as S from '@components/PreviewShareListBigSizeImage/PreviewShareListBigSizeImage.style';
import { RemainedTime } from '@components/RemainedTime';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { listExampleType } from '@data/shareList';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';
interface PreviewShareListBigSizeImagePropsType {
  data: listExampleType[];
}

const PreviewShareListBigSizeImage = ({ data }: PreviewShareListBigSizeImagePropsType) => {
  return (
    <>
      {data.map(
        ({
          id,
          thumbnailUrl,
          title,
          location,
          price,
          originalPrice,
          currentRecruitment,
          finalRecruitment,
          createdDateTime,
          appointmentDateTime,
        }) => (
          <S.Wrapper key={id}>
            <S.ImageContainer>
              <img src={thumbnailUrl} alt={title} width='330' height='100' />
              <RemainedTime targetTime={appointmentDateTime} />
            </S.ImageContainer>
            <S.Container>
              <S.TextContainer>
                <S.ImageTitle>{title}</S.ImageTitle>
                <PersonnelStatus
                  curPersonnel={currentRecruitment}
                  totalPersonnel={finalRecruitment}
                />
              </S.TextContainer>
              <S.ImagePriceBlock>
                <S.ImageContents>
                  <S.Location>
                    {location} / {calcTwoTimeDifference(createdDateTime)}
                  </S.Location>
                  {price}원<S.ImageOriginalPrice>원가 {originalPrice}</S.ImageOriginalPrice>
                </S.ImageContents>
              </S.ImagePriceBlock>
            </S.Container>
          </S.Wrapper>
        ),
      )}
    </>
  );
};

export default PreviewShareListBigSizeImage;
