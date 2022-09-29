import { useNavigate } from 'react-router-dom';

import { RemainedTime } from '@components/RemainedTime';
import * as S from '@components/ShareListItemCenterImage/ShareListItemCenterImage.style';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { pathName } from '@constants/pathName';
import { ShareListType } from '@type/shareList';

const ShareListItemCenterImage = ({
  id,
  thumbnailUrl,
  title,
  currentRecruitment,
  finalRecruitment,
  closedDateTime,
}: ShareListType) => {
  const navigate = useNavigate();

  return (
    <S.Container
      onClick={() => {
        navigate(`${pathName.shareDetail}/${id}`);
      }}
    >
      <S.ImgWrapper>
        <ImgContainer
          imgSrc={thumbnailUrl}
          imgTitle={title}
          imgWrapperWidth='7.5rem'
          imgWrapperRatio={1 / 1}
          borderRadius='0.5rem'
        />
        <RemainedTime
          targetTime={closedDateTime}
          position={{ left: '0.375rem', top: '0.375rem' }}
        />
      </S.ImgWrapper>
      <S.ShareInfo>
        <h2>{title}</h2>
        <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
      </S.ShareInfo>
    </S.Container>
  );
};

export default ShareListItemCenterImage;
