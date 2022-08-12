import * as S from '@components/ShareDetailInfo/ShareDetailInfo.style';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

const ShareDetailInfo = ({
  title,
  location,
  createdDateTime,
  recruitmentMemberThumbnailImageUrls,
  currentRecruitment,
  finalRecruitment,
  description,
}: any) => {
  // data 타입 정해지면 any 바뀔예정
  return (
    <S.ContentsContainer>
      <S.Title>{title}</S.Title>
      <S.UpperInfo>
        <S.LocationInfo>
          <S.Location>{location}</S.Location>
          <S.Location>협의가능</S.Location>
        </S.LocationInfo>
        <S.CreateTime>{calcTwoTimeDifference(createdDateTime)}</S.CreateTime>
      </S.UpperInfo>
      <S.LowerInfo>
        <S.ImgWrapper>
          <img src={recruitmentMemberThumbnailImageUrls[0]} alt='이미지' />
        </S.ImgWrapper>
        <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
      </S.LowerInfo>
      <S.Description>{description}</S.Description>
    </S.ContentsContainer>
  );
};

export default ShareDetailInfo;
