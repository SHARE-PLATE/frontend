import * as S from '@components/ChattingDetailInfo/ChattingDetailInfo.style';
import PersonnelStatus from '@components/common/PersonnelStatus';
import Price from '@components/common/Price';
import { TestChattingDetailShareType } from '@pages/ChattingDetail/chattingDetailData';

type ChattingDetailInfoPropsType = {
  thumbnailImageUrl: string;
  title: string;
  price: number;
  originalPrice: number;
  currentRecruitment: number;
  finalRecruitment: number;
};

const ChattingDetailInfo = ({
  thumbnailImageUrl,
  title,
  price,
  originalPrice,
  currentRecruitment,
  finalRecruitment,
}: ChattingDetailInfoPropsType) => {
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

export default ChattingDetailInfo;
