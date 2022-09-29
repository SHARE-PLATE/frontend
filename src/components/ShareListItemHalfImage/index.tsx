import { useNavigate } from 'react-router-dom';

import * as S from '@components/ShareListItemHalfImage/ShareListItemHalfImage.style';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { pathName } from '@constants/pathName';
import { ShareRecommendationType } from '@type/shareList';
import { getPriceType } from '@utils/getPriceType';

type ShareListItemHalfImagePropsType = {
  itemInfo?: ShareRecommendationType;
};

const ShareListItemHalfImage = ({ itemInfo }: ShareListItemHalfImagePropsType) => {
  if (!itemInfo) return <S.Wrapper isEmpty={true} />;

  const navigate = useNavigate();
  const { thumbnailUrl, title, price, currentRecruitment, finalRecruitment, id } = itemInfo;

  const handleClick = () => {
    navigate(`${pathName.shareDetail}/${id}`);
  };

  return (
    <S.Wrapper onClick={handleClick}>
      <ImgContainer
        imgSrc={thumbnailUrl}
        imgTitle={title}
        imgWrapperWidth='100%'
        imgWrapperRatio={1.44 / 1}
        borderRadius='0.5rem'
      />
      <S.InfoWrapper>
        <div>{title}</div>
        <div>{getPriceType({ price, isUnit: true })}</div>
        <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default ShareListItemHalfImage;
