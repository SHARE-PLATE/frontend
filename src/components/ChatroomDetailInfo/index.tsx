import * as S from '@components/ChatroomDetailInfo/ChatroomDetailInfo.style';
import PersonnelStatus from '@components/common/PersonnelStatus';
import Price from '@components/common/Price';

type ChatroomDetailInfoPropsType = {
  thumbnailImageUrl: string;
  title: string;
  price: number;
  originalPrice: number;
  currentRecruitment: number;
  finalRecruitment: number;
};

const ChatroomDetailInfo = ({
  thumbnailImageUrl,
  title,
  price,
  originalPrice,
  currentRecruitment,
  finalRecruitment,
}: ChatroomDetailInfoPropsType) => {
  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <img src={thumbnailImageUrl} />
      </S.ImgWrapper>
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
