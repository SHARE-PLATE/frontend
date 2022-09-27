import { useEffect, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getShareDetailData, getShareListWriterData } from '@api/shareList';
import { getShareListRecommendedData } from '@api/shareRecommended';
import InteractionBar from '@components/InteractionBar';
import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import ShareDetailHeader from '@components/ShareDetailHeader';
import ShareDetailInfo from '@components/ShareDetailInfo';
import UserInfoWithFollow from '@components/UserInfoWithFollow';
import { noRelatedShareList, offerShare } from '@constants/mentions';
import * as S from '@pages/ShareDetail/ShareDetail.style';
import { currentLatitudeLongitude } from '@store/location';
import { ShareDetailType, ShareListType, ShareWriterSharesType } from '@type/shareList';

const ShareDetail = () => {
  const {
    state: { writerId },
  } = useLocation() as {
    state: { writerId: string };
  };
  const { id } = useParams();
  const [detailData, setDetailData] = useState<ShareDetailType>();
  const [recommendedData, setRecommendedData] = useState<ShareListType[]>();
  const [writerSharesData, setWriterSharesData] = useState<ShareWriterSharesType[]>();
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);

  const getShareDetail = async () => {
    if (!id) return;
    const shareDetailData = await getShareDetailData({ id });
    setDetailData(shareDetailData);
  };

  const getShareRecommend = async () => {
    const recommendedFetchData = await getShareListRecommendedData(lat, lng);
    setRecommendedData(recommendedFetchData);
  };

  const getWriterShares = async () => {
    const sharListWriterData = await getShareListWriterData({ writerId });
    if (!sharListWriterData) return;
    const { shares } = sharListWriterData;
    setWriterSharesData(shares);
    console.log(shares);
  };

  useEffect(() => {
    getShareDetail();
    getWriterShares();
  }, []);

  useEffect(() => {
    getShareRecommend();
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
            <S.LowerWrapper>
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
            </S.LowerWrapper>
          </>
        )}
      </S.Wrapper>
      <InteractionBar isWished={detailData?.wish} isEntry={detailData?.entry} />
    </>
  );
};

export default ShareDetail;
