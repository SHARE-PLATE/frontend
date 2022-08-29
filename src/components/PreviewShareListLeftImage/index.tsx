import { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import ImageContainer from '@components/PreviewShareListLeftImage/ImageContainer';
import * as S from '@components/PreviewShareListLeftImage/PreviewShareListLeftImage.style';
import PersonnelStatus from '@components/common/PersonnelStatus';
import Price from '@components/common/Price';
import { thumbnailUrlListType } from '@type/shareList';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

interface PreviewShareListLeftImagePropsType {
  data: thumbnailUrlListType[];
  count?: number;
  isDone?: boolean;
}
const PreviewShareListLeftImage = ({ data, count, isDone }: PreviewShareListLeftImagePropsType) => {
  const navigate = useNavigate();

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
        <S.Container
          key={id}
          onClick={() => {
            navigate(`/share-detail/${id}`);
          }}
        >
          <ImageContainer url={thumbnailUrl} date={appointmentDateTime} isDone={isDone} />
          <S.ListInfo>
            <S.ListInfoTexts>
              <S.Title>{title}</S.Title>
              <S.Location>
                {location} / {calcTwoTimeDifference(createdDateTime)}
              </S.Location>
              <Price price={price} originalPrice={originalPrice} />
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
