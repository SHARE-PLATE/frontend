import { useEffect, useState } from 'react';

import { useRecoilValueLoadable } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import * as S from '@components/ShareDetailRecruitments/ShareDetailRecruitments.style';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { CURRENT_SHARE_PARTICIPANTS } from '@constants/words';
import { recruitmentState, RecruitmentType } from '@store/shareDetail';
import { ShareDetailType } from '@type/shareList';

type ShareDetailRecruitmentsPropsType = Pick<ShareDetailType, 'writerThumbnailImageUrl' | 'id'>;

const ShareDetailRecruitments = ({
  id,
  writerThumbnailImageUrl,
}: ShareDetailRecruitmentsPropsType) => {
  const defaultRecruitmentInfo: RecruitmentType = {
    recruitmentMemberThumbnailImageUrls: [writerThumbnailImageUrl],
    currentRecruitment: 1,
    finalRecruitment: 1,
  };
  const [curRecruitmentInfo, setCurRecruitmentInfo] = useState(defaultRecruitmentInfo);
  const { state: recruitmentInfoState, contents: recruitmentInfo } = useRecoilValueLoadable(
    recruitmentState(`${id}`),
  );
  const { currentRecruitment, finalRecruitment, recruitmentMemberThumbnailImageUrls } =
    curRecruitmentInfo;

  const getImgContents = () => {
    const images = recruitmentMemberThumbnailImageUrls.map((member: string) => {
      return (
        <ImgContainer
          key={getRandomKey()}
          imgSrc={member}
          imgTitle={member}
          imgWrapperRatio={1 / 1}
          imgWrapperWidth='2.9rem'
          borderRadius='5rem'
          noAlign={true}
        />
      );
    });
    return images;
  };

  useEffect(() => {
    if (recruitmentInfoState === 'hasValue' && recruitmentInfo) {
      setCurRecruitmentInfo(recruitmentInfo);
      return;
    }
  }, [recruitmentInfoState]);

  return (
    <S.LowerInfo>
      <S.PersonnelStatusWrapper>
        {CURRENT_SHARE_PARTICIPANTS}
        <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
      </S.PersonnelStatusWrapper>
      <S.ImgContentsWrapper>{getImgContents()}</S.ImgContentsWrapper>
    </S.LowerInfo>
  );
};

export default ShareDetailRecruitments;
