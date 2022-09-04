import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { getShareListRecommendedData } from '@api/shareRecommended';
import * as S from '@components/PreviewShareListLongImage/PreviewShareListLongImage.style';
import { ShareListItemLongImage } from '@components/ShareListItemLongImage';
import Title from '@components/common/Title';
import { littleDeadlineMention, noLittleTimeListMention } from '@constants/mentions';
import { currentLatitudeLongitude } from '@store/location';
import { thumbnailUrlListType } from '@type/shareList';

const PreviewShareListLongImage = () => {
  const [recommendedData, setRecommendedData] = useState<thumbnailUrlListType[]>();
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);

  useEffect(() => {
    (async () => {
      const recommendedFetchData = await getShareListRecommendedData(lat, lng);

      setRecommendedData(recommendedFetchData);
    })();
  }, [lat, lng]);

  return (
    <S.Wrapper>
      <Title contentTitle={littleDeadlineMention} size='LARGE' />
      {!!recommendedData?.length ? (
        <S.ListWrapper>
          {recommendedData.map((item) => (
            <ShareListItemLongImage key={item.id} itemInfo={item} />
          ))}
        </S.ListWrapper>
      ) : (
        <S.noListWrapper>{noLittleTimeListMention}</S.noListWrapper>
      )}
    </S.Wrapper>
  );
};

export default PreviewShareListLongImage;
