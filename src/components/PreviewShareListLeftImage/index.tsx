import { ReactElement } from 'react';

import * as S from '@components/PreviewShareListLeftImage/PreviewShareListLeftImage.style';
import { RemainedTime } from '@components/RemainedTime';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { listExampleType } from '@data/shareList';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

interface PreviewShareListLeftImagePropsType {
  data: listExampleType[];
  count?: number;
}
const PreviewShareListLeftImage = ({ data, count }: PreviewShareListLeftImagePropsType) => {
  const list: ReactElement[] = [];

  data.every(
    (
      {
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
      },
      dataCount,
    ) => {
      list.push(
        <S.Container key={id}>
          <S.ImgWrapper>
            <img src={thumbnailUrl} alt={title} />
            <RemainedTime targetTime={appointmentDateTime} />
          </S.ImgWrapper>
          <S.ListInfo>
            <S.ListInfoTexts>
              <S.Title>{title}</S.Title>
              <S.Location>
                {location} / {calcTwoTimeDifference(createdDateTime)}
              </S.Location>
              <S.Cost>
                {price}
                <S.ImageOriginalPrice>원가 {originalPrice}</S.ImageOriginalPrice>
              </S.Cost>
            </S.ListInfoTexts>
            <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
          </S.ListInfo>
        </S.Container>,
      );

      return dataCount + 1 === count ? false : true;
    },
  );

  return <S.Wrapper>{list}</S.Wrapper>;
};

export default PreviewShareListLeftImage;
