import { useNavigate } from 'react-router-dom';

import * as S from '@components/ChatroomDetailInfo/ChatroomDetailInfo.style';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import Price from '@components/common/Price';
import { pathName } from '@constants/pathName';
import { ChatroomDetailShareType } from '@type/chat';

type ChatroomDetailInfoPropsType = Pick<
  ChatroomDetailShareType,
  | 'thumbnailImageUrl'
  | 'title'
  | 'price'
  | 'originalPrice'
  | 'currentRecruitment'
  | 'finalRecruitment'
  | 'id'
>;

const ChatroomDetailInfo = ({
  thumbnailImageUrl,
  title,
  price,
  originalPrice,
  currentRecruitment,
  finalRecruitment,
  id,
}: ChatroomDetailInfoPropsType) => {
  const navigate = useNavigate();
  const handleClickWrapper = () => {
    navigate(`${pathName.shareDetail}/${id}`);
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

export default ChatroomDetailInfo;
