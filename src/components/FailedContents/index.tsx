import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { getShareListRecommendedData } from '@api/shareRecommended';
import * as S from '@components/FailedContents/FailedContents.style';
import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import Icon from '@components/common/Icon';
import { noRelatedShareList, offerShare, searchFailed } from '@constants/mentions';
import { currentLatitudeLongitude } from '@store/location';
import { thumbnailUrlListType } from '@type/shareList';

const FailedContents = () => {
  const [recommendedData, setRecommendedData] = useState<thumbnailUrlListType[]>();
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
        <Icon iconName='Search' />
        <S.FailedText>{searchFailed}</S.FailedText>
      </S.FailedContent>
      {recommendedData && (
        <PreviewShareListHalfImage
          title={offerShare}
          data={recommendedData}
          emptyMention={noRelatedShareList}
          showMoreOption={() => console.log('더보기')}
        />
      )}
    </>
  );
};

export default FailedContents;
