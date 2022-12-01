import { useEffect, useRef, useState } from 'react';

import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import * as S from '@components/ShareDetailRecruitments/ShareDetailRecruitments.style';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { CURRENT_SHARE_PARTICIPANTS } from '@constants/words';
import { isEntryState } from '@store/shareDetail';
import { userInfoState } from '@store/userInfo';
import { ShareDetailType } from '@type/shareList';

type ShareDetailRecruitmentsPropsType = Pick<
  ShareDetailType,
  'currentRecruitment' | 'finalRecruitment' | 'recruitmentMemberThumbnailImageUrls'
>;

const ShareDetailRecruitments = ({
  currentRecruitment,
  finalRecruitment,
  recruitmentMemberThumbnailImageUrls,
}: ShareDetailRecruitmentsPropsType) => {
  const isEntry = useRecoilValue(isEntryState);
  const [showedCurRecruitment, setShowedCurRecruitment] = useState(currentRecruitment);
  const [imageUrls, setImageUrls] = useState(recruitmentMemberThumbnailImageUrls);
  const { contents: userInfo, state } = useRecoilValueLoadable(userInfoState);
  const userImageIdxRef = useRef<number>();

  const getImgContents = () => {
    const images = imageUrls.map((member: string) => {
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
    if (state !== 'hasValue' || !userInfo) return;
    console.log(userInfo);
    imageUrls.forEach((url, idx) => {
      url === userInfo.profileImageUrl && (userImageIdxRef.current = idx);
    });
  }, [state]);

  useEffect(() => {
    if (isEntry === null) return;
    setShowedCurRecruitment((prev) => (prev += isEntry ? 1 : -1));

    if (state !== 'hasValue' || !userInfo) return;
    setImageUrls((prevUrls) => {
      if (isEntry) {
        const newUrls = [userInfo.profileImageUrl, ...prevUrls];
        userImageIdxRef.current = 0;
        return newUrls;
      } else {
        const newUrls = [...prevUrls];
        const userImageIdx = userImageIdxRef.current;
        if (typeof userImageIdx !== 'number') return prevUrls;
        newUrls.splice(userImageIdx, 1);
        return newUrls;
      }
    });
  }, [isEntry]);

  return (
    <S.LowerInfo>
      <S.PersonnelStatusWrapper>
        {CURRENT_SHARE_PARTICIPANTS}
        <PersonnelStatus curPersonnel={showedCurRecruitment} totalPersonnel={finalRecruitment} />
      </S.PersonnelStatusWrapper>
      <S.ImgContentsWrapper>{getImgContents()}</S.ImgContentsWrapper>
    </S.LowerInfo>
  );
};

export default ShareDetailRecruitments;
