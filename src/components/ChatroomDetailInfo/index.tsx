import * as S from '@components/ChatroomDetailInfo/ChatroomDetailInfo.style';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import Price from '@components/common/Price';
import { ChatroomDetailShareType } from '@type/chat';

type ChatroomDetailInfoPropsType = Pick<
  ChatroomDetailShareType,
  | 'thumbnailImageUrl'
  | 'title'
  | 'price'
  | 'originalPrice'
  | 'currentRecruitment'
  | 'finalRecruitment'
>;

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
