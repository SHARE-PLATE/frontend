import { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from '@components/PreviewShareListLeftImage/PreviewShareListLeftImage.style';
import { RemainedTime } from '@components/RemainedTime';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import Price from '@components/common/Price';
import { thumbnailUrlListType } from '@type/shareList';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

import ExpirationDate from './ExpirationDate';

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
          <S.ImgWrapper>
            <ImgContainer
              imgSrc={thumbnailUrl}
              imgTitle={title}
              imgWrapperWidth='7rem'
              imgWrapperRatio={1 / 1}
            />
            {isDone ? (
              <ExpirationDate />
            ) : (
              <RemainedTime
                targetTime={appointmentDateTime}
                position={{ top: '0.5rem', left: '0.5rem' }}
              />
            )}
          </S.ImgWrapper>
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
