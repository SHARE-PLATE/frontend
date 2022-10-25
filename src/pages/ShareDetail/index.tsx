import { useCallback, useEffect, useState } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getShareDetailData, getShareListWriterData } from '@api/shareList';
import { getShareListRecommendedData } from '@api/shareRecommended';
import ErrorWithButtons from '@components/ErrorWithButtons';
import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import ShareDetailBottomBar from '@components/ShareDetailBottomBar';
import ShareDetailHeader from '@components/ShareDetailHeader';
import ShareDetailInfo from '@components/ShareDetailInfo';
import ShareDetailInfoBar from '@components/ShareDetailInfoBar';
import UserInfoWithFollow from '@components/UserInfoWithFollow';
import Icon from '@components/common/Icon';
import { noRelatedShareList, offerShare } from '@constants/mentions';
import useIsTopState from '@hooks/useIsTopState';
import * as S from '@pages/ShareDetail/ShareDetail.style';
import { currentLatitudeLongitude } from '@store/location';
import { ShareDetailType, ShareRecommendationType } from '@type/shareList';

const ShareDetail = () => {
  const { id } = useParams();
  if (!id) return <ErrorWithButtons />;

  const { state } = useLocation() as {
    state: { writerId: string };
  };
  const [detailData, setDetailData] = useState<ShareDetailType>();
  const [recommendedData, setRecommendedData] = useState<ShareRecommendationType[]>([]);
  const [writerSharesData, setWriterSharesData] = useState<ShareRecommendationType[]>([]);
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);
  const [isInfoBar, setIsInfoBar] = useState(false);
  const navigate = useNavigate();
  const isTop = useIsTopState();
  const infoRef = useCallback((infoDiv: HTMLDivElement) => {
    const infoRefObserver = new IntersectionObserver(([entry]) =>
      setIsInfoBar(!entry.isIntersecting),
    );
    if (infoDiv) infoRefObserver.observe(infoDiv);
  }, []);

  const getShareDetail = async () => {
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
            <S.TopFixedWrapper isTop={isTop}>
              <S.IconsWrapper>
                <Icon iconName='Back' handleClick={() => navigate(-1)} />
                <Icon iconName='Upload' />
              </S.IconsWrapper>
              <S.ShareDetailInfoBarWrapper isInfoBar={isInfoBar}>
                <ShareDetailInfoBar
                  title={detailData.title}
                  currentRecruitment={detailData.currentRecruitment}
                  finalRecruitment={detailData.finalRecruitment}
                  thumbnailImageUrl={detailData.imageUrls[0]}
                  price={detailData.price}
                  originalPrice={detailData.originalPrice}
                />
              </S.ShareDetailInfoBarWrapper>
            </S.TopFixedWrapper>
            <S.UpperWrapper>
              <ShareDetailHeader {...detailData} />
              <ShareDetailInfo {...detailData} infoRef={infoRef} />
            </S.UpperWrapper>
            <S.LowerWrapper>
              <UserInfoWithFollow {...detailData} />
              <PreviewShareListHalfImage
                title={`${detailData.writer}님의 쉐어상품`}
                data={writerSharesData}
                emptyMention={noRelatedShareList}
              />
              <PreviewShareListHalfImage
                title={offerShare}
                data={recommendedData}
                emptyMention={noRelatedShareList}
              />
            </S.LowerWrapper>
          </>
        )}
      </S.Wrapper>
      {detailData && <ShareDetailBottomBar {...detailData} isInfoBar={isInfoBar} />}
    </>
  );
};

export default ShareDetail;
