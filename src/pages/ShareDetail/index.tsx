import { useEffect, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getShareDetailData, getShareListWriterData } from '@api/shareList';
import { getShareListRecommendedData } from '@api/shareRecommended';
import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import ShareDetailBottomBar from '@components/ShareDetailBottomBar';
import ShareDetailHeader from '@components/ShareDetailHeader';
import ShareDetailInfo from '@components/ShareDetailInfo';
import UserInfoWithFollow from '@components/UserInfoWithFollow';
import { noRelatedShareList, offerShare } from '@constants/mentions';
import * as S from '@pages/ShareDetail/ShareDetail.style';
import { currentLatitudeLongitude } from '@store/location';
import { ShareDetailType, ShareRecommendationType } from '@type/shareList';

const ShareDetail = () => {
  const { state } = useLocation() as {
    state: { writerId: string };
  };
  const { id } = useParams();
  const [detailData, setDetailData] = useState<ShareDetailType>();
  const [recommendedData, setRecommendedData] = useState<ShareRecommendationType[]>([]);
  const [writerSharesData, setWriterSharesData] = useState<ShareRecommendationType[]>([]);
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);

  const getShareDetail = async () => {
    if (!id) return;
    const shareDetailData = await getShareDetailData({ id });
    setDetailData(shareDetailData);
  };

  const getShareRecommend = async () => {
    const recommendData = await getShareListRecommendedData(lat, lng);
    setRecommendedData(recommendData);
  };

  const getWriterShares = async () => {
    if (!state?.writerId) return;
    const sharListWriterData = await getShareListWriterData({ writerId: state.writerId });
    if (!sharListWriterData) return;
    const { shares } = sharListWriterData;
    setWriterSharesData(shares);
  };

  useEffect(() => {
    getShareDetail();
    getWriterShares();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    getShareRecommend();
  }, [lat, lng, id]);

  return (
    <>
      <S.Wrapper>
        {detailData && (
          <>
            <S.UpperWrapper>
              <ShareDetailHeader {...detailData} />
              <ShareDetailInfo {...detailData} />
            </S.UpperWrapper>
            <S.LowerWrapper>
              <UserInfoWithFollow {...detailData} />
              <PreviewShareListHalfImage
                title={`${detailData.writer}님의 쉐어상품`}
                data={writerSharesData}
                emptyMention={noRelatedShareList}
                showMoreOption={() => console.log('더보기')}
              />
              <PreviewShareListHalfImage
                title={offerShare}
                data={recommendedData}
                emptyMention={noRelatedShareList}
                showMoreOption={() => console.log('더보기')}
              />
            </S.LowerWrapper>
          </>
        )}
      </S.Wrapper>
      {detailData && <ShareDetailBottomBar isWished={detailData.wish} entry={detailData.entry} />}
    </>
  );
};

export default ShareDetail;
