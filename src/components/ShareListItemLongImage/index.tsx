import { RemainedTime } from '@components/RemainedTime';
import * as S from '@components/ShareListItemLongImage/ShareListItemLongImage.style';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { thumbnailUrlListType } from '@type/shareList';
import { getPriceType } from '@utils/getPriceType';

export const ShareListItemLongImage = ({ itemInfo }: { itemInfo: thumbnailUrlListType }) => {
  const {
    title,
    location,
    price,
    thumbnailUrl,
    appointmentDateTime,
    finalRecruitment,
    currentRecruitment,
  } = itemInfo;

  return (
    <S.ItemWrapper>
      <S.ImgWrapper>
        <ImgContainer
          imgSrc={thumbnailUrl}
          imgTitle={title}
          imgWrapperWidth='9.62rem'
          imgWrapperRatio={0.686 / 1}
        />
        <RemainedTime
          targetTime={appointmentDateTime}
          position={{ top: '0.375rem', left: '0.375rem' }}
        />
      </S.ImgWrapper>
      <S.InfoWrapper>
        <S.ItemTitle>{title}</S.ItemTitle>
        <S.ItemLocation>{`${location} ∙ 몇 시간 전`}</S.ItemLocation>
        <S.ItemPrice>
          <div>{getPriceType({ price, isUnit: true })}</div>
        </S.ItemPrice>
        <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
      </S.InfoWrapper>
    </S.ItemWrapper>
  );
};
