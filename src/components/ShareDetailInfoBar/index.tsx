import { useNavigate } from 'react-router-dom';

import * as S from '@components/ShareDetailInfoBar/ShareDetailInfoBar.style';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import Price from '@components/common/Price';
import { pathName } from '@constants/pathName';
import { ChatroomDetailShareType } from '@type/chat';

type ShareDetailInfoPropsType = Pick<
  ChatroomDetailShareType,
  | 'thumbnailImageUrl'
  | 'title'
  | 'price'
  | 'originalPrice'
  | 'currentRecruitment'
  | 'finalRecruitment'
> & { id?: number };

const ShareDetailInfoBar = ({
  thumbnailImageUrl,
  title,
  price,
  originalPrice,
  currentRecruitment,
  finalRecruitment,
  id,
}: ShareDetailInfoPropsType) => {
  const navigate = useNavigate();
  const handleClickWrapper = () => {
    id && navigate(`${pathName.shareDetail}/${id}`);
  };

  return (
    <S.Wrapper onClick={handleClickWrapper}>
      <ImgContainer
        imgSrc={thumbnailImageUrl}
        imgTitle={thumbnailImageUrl}
        imgWrapperRatio={1 / 1}
        imgWrapperWidth='3rem'
        borderRadius='0.25rem'
      />
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Numbers>
          <Price price={price} originalPrice={originalPrice} />
          <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
        </S.Numbers>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default ShareDetailInfoBar;
