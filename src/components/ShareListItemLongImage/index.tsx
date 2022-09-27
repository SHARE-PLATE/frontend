import { useNavigate } from 'react-router-dom';

import { RemainedTime } from '@components/RemainedTime';
import * as S from '@components/ShareListItemLongImage/ShareListItemLongImage.style';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { pathName } from '@constants/pathName';
import { ShareListType } from '@type/shareList';
import { getPriceType } from '@utils/getPriceType';

export const ShareListItemLongImage = ({ itemInfo }: { itemInfo: ShareListType }) => {
  const {
    id,
    title,
    location,
    price,
    thumbnailUrl,
    closedDateTime,
    finalRecruitment,
    currentRecruitment,
  } = itemInfo;
  const navigate = useNavigate();

  return (
    <S.ItemWrapper
      onClick={() => {
        navigate(`${pathName.shareDetail}/${id}`);
      }}
    >
      <S.ImgWrapper>
        <ImgContainer
          imgSrc={thumbnailUrl}
          imgTitle={title}
          imgWrapperWidth='9.62rem'
          imgWrapperRatio={0.686 / 1}
        />
        <RemainedTime
          targetTime={closedDateTime}
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
