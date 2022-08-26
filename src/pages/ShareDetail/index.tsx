import { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getShareListRecommendedData } from '@api/shareRecommended';
import InteractionBar from '@components/InteractionBar';
import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import ShareDetailHeader from '@components/ShareDetailHeader';
import ShareDetailInfo from '@components/ShareDetailInfo';
import UserInfoWithFollow from '@components/UserInfoWithFollow';
import { API } from '@constants/api';
import { noRelatedShareList, offerShare } from '@constants/mentions';
import * as S from '@pages/ShareDetail/ShareDetail.style';
import { currentLatitudeLongitude } from '@store/location';
import { imageUrlsArrayListType, thumbnailUrlListType } from '@type/shareList';

const ShareDetail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<imageUrlsArrayListType>();
  const [recommendedData, setRecommendedData] = useState<thumbnailUrlListType[]>();
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${API.SHARE_DETAIL(id)}`);

      setDetailData(data);
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const recommendedFetchData = await getShareListRecommendedData(lat, lng);

      setRecommendedData(recommendedFetchData);
    })();
  }, [lat, lng]);

  return (
    <>
      <S.Wrapper>
        {detailData?.id && (
          <>
            <S.UpperWrapper>
              <ShareDetailHeader {...detailData} />
              <ShareDetailInfo {...detailData} />
            </S.UpperWrapper>
            <div>
              <UserInfoWithFollow {...detailData} />
              <PreviewShareListHalfImage
                title={`${detailData.writer}님의 쉐어상품`}
                data={[]}
                emptyMention={noRelatedShareList}
                showMoreOption={() => console.log('더보기')}
              />
              {recommendedData && (
                <PreviewShareListHalfImage
                  title={offerShare}
                  data={recommendedData}
                  emptyMention={noRelatedShareList}
                  showMoreOption={() => console.log('더보기')}
                />
              )}
            </div>
          </>
        )}
      </S.Wrapper>
      <InteractionBar />
    </>
  );
};

export default ShareDetail;
