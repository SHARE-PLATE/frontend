import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { getShareListRecommendedData } from '@api/shareRecommended';
import * as S from '@components/FailedContents/FailedContents.style';
import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import Icon from '@components/common/Icon';
import { noRelatedShareList, offerShare, searchFailed } from '@constants/mentions';
import { currentLatitudeLongitude } from '@store/location';
import { ShareListType } from '@type/shareList';

const FailedContents = () => {
  const [recommendedData, setRecommendedData] = useState<ShareListType[]>();
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);

  useEffect(() => {
    (async () => {
      const recommendedFetchData = await getShareListRecommendedData(lat, lng);

      setRecommendedData(recommendedFetchData);
    })();
  }, [lat, lng]);

  return (
    <>
      <S.FailedContent>
        <Icon iconName='Search' iconSize={4.2} />
        <S.FailedText>{searchFailed}</S.FailedText>
      </S.FailedContent>
      {recommendedData && (
        <PreviewShareListHalfImage
          title={offerShare}
          data={recommendedData}
          emptyMention={noRelatedShareList}
        />
      )}
    </>
  );
};

export default FailedContents;
