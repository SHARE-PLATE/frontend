import * as S from '@components/ShareDetailInfo/ShareDetailInfo.style';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

interface ShareDetailInfoPropsType {
  title: string;
  location: string;
  createdDateTime: string;
  recruitmentMemberThumbnailImageUrls: string[];
  currentRecruitment: number;
  finalRecruitment: number;
  description: string;
}

const ShareDetailInfo = ({
  title,
  location,
  createdDateTime,
  recruitmentMemberThumbnailImageUrls,
  currentRecruitment,
  finalRecruitment,
  description,
}: ShareDetailInfoPropsType) => {
  const ImgContents = recruitmentMemberThumbnailImageUrls.map((member: string) => (
    <ImgContainer
      imgSrc={member}
      imgTitle={member}
      imgWrapperRatio={1 / 1}
      imgWrapperWidth='2.9rem'
      borderRadius='5rem'
    />
  ));

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
        <S.ImgWrapper>{ImgContents}</S.ImgWrapper>
        <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
      </S.LowerInfo>
      <S.Description>{description}</S.Description>
    </S.ContentsContainer>
  );
};

export default ShareDetailInfo;
