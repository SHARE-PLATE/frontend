import * as S from '@components/PreviewShareListLeftImage/PreviewShareListLeftImage.style';
import { RemainedTime } from '@components/RemainedTime';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { listExampleType } from '@data/shareList';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

interface PreviewShareListLeftImagePropsType {
  data: listExampleType[];
}
const PreviewShareListLeftImage = ({ data }: PreviewShareListLeftImagePropsType) => {
  return (
    <S.Wrapper>
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
          <S.Container key={id}>
            <img src={thumbnailUrl} alt={title} width='100' height='100' />
            <RemainedTime targetTime={appointmentDateTime} />
            <S.ListInfo>
              <S.Title>{title}</S.Title>
              <S.Location>
                {location} / {calcTwoTimeDifference(createdDateTime)}
              </S.Location>
              <S.Cost>
                {price}
                <S.ImageOriginalPrice>원가 {originalPrice}</S.ImageOriginalPrice>
              </S.Cost>
              <div>
                <PersonnelStatus
                  curPersonnel={currentRecruitment}
                  totalPersonnel={finalRecruitment}
                />
              </div>
            </S.ListInfo>
          </S.Container>
        ),
      )}
    </S.Wrapper>
  );
};

export default PreviewShareListLeftImage;
