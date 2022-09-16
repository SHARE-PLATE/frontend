import { useNavigate } from 'react-router-dom';
import { v4 as createRandomKey } from 'uuid';

import ImgContainer from '@components/ImgContainer';
import * as S from '@components/PreviewShareListBigSizeImage/PreviewShareListBigSizeImage.style';
import { RemainedTime } from '@components/RemainedTime';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { thumbnailUrlListType } from '@type/shareList';
import { getPriceType } from '@utils/getPriceType';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

interface PreviewShareListBigSizeImagePropsType {
  data: thumbnailUrlListType[];
}

const PreviewShareListBigSizeImage = ({ data }: PreviewShareListBigSizeImagePropsType) => {
  const navigate = useNavigate();
  const showedList = data.map(
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
      <S.ItemWrapper
        key={id}
        onClick={() => {
          navigate(`/share-detail/${id}`);
        }}
      >
        <S.ImgWrapper>
          <ImgContainer
            imgSrc={thumbnailUrl}
            imgTitle={title}
            imgWrapperWidth='100%'
            imgWrapperRatio={2.13 / 1}
          />
          <RemainedTime
            targetTime={appointmentDateTime}
            position={{ top: '0.375rem', left: '0.375rem' }}
          />
        </S.ImgWrapper>
        <S.Container>
          <S.TextWrapper>
            <S.Title>{title}</S.Title>
            <S.Location>
              {location} / {calcTwoTimeDifference(createdDateTime)}
            </S.Location>
            <S.PriceWrapper>
              <S.Price>{getPriceType({ price, isUnit: true })}</S.Price>
              <S.OriginPrice>{getPriceType({ price: originalPrice, isUnit: true })}</S.OriginPrice>
            </S.PriceWrapper>
          </S.TextWrapper>
          <S.PersonnelStatusWrapper>
            <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
          </S.PersonnelStatusWrapper>
        </S.Container>
      </S.ItemWrapper>
    ),
  );

  if (showedList.length % 2) showedList.push(<S.ItemWrapper key={createRandomKey()} />);

  return <S.ListWrapper>{showedList}</S.ListWrapper>;
};

export default PreviewShareListBigSizeImage;
