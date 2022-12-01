import { useCallback, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';

import { getShareListWriterData } from '@api/shareList';
import { getShareListRecommendedData } from '@api/shareRecommended';
import ErrorWithButtons from '@components/ErrorWithButtons';
import Loading from '@components/Loading';
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
import { isEntryState, shareDetailState, shareDetailTrigger } from '@store/shareDetail';
import { ShareRecommendationType } from '@type/shareList';

const ShareDetail = () => {
  const { id } = useParams();
  if (!id) return <ErrorWithButtons />;

  const shareDetailValue = shareDetailState({ id });
  const setShareDetailTrigger = useSetRecoilState(shareDetailTrigger);
  const resetIsEntry = useResetRecoilState(isEntryState);
  const { state, contents } = useRecoilValueLoadable(shareDetailValue);
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

  const getShareRecommend = async () => {
    const recommendData = await getShareListRecommendedData(lat, lng);
    setRecommendedData(recommendData);
  };

  const getWriterShares = async () => {
    if (state !== 'hasValue' || !contents || typeof contents === 'string') return;
    const sharListWriterData = await getShareListWriterData({ writerId: contents.writerId });

    if (!sharListWriterData) return;
    const { shares } = sharListWriterData;

    setWriterSharesData(shares);
  };

  useEffect(() => {
    getWriterShares();
    window.scrollTo(0, 0);
  }, [state]);

  useEffect(() => {
    getShareRecommend();
  }, [lat, lng, state]);

  useEffect(() => {
    return () => {
      setShareDetailTrigger((prev) => prev + 1);
      resetIsEntry();
    };
  }, [id]);

  const getContents = () => {
    switch (state) {
      case 'loading':
        return <Loading color='grey4' size={40} border={5} />;
      case 'hasError':
        return <ErrorWithButtons mention='쉐어 정보를 불러오지 못했습니다.' />;
      case 'hasValue':
        if (!contents || typeof contents === 'string')
          return <ErrorWithButtons mention={contents || '쉐어 정보를 불러오지 못했습니다.'} />;
        return (
          <>
            <S.Wrapper>
              <S.TopFixedWrapper isTop={isTop}>
                <S.IconsWrapper>
                  <Icon iconName='Back' handleClick={() => navigate(-1)} />
                  <Icon iconName='Upload' />
                </S.IconsWrapper>
                <S.ShareDetailInfoBarWrapper isInfoBar={isInfoBar}>
                  <ShareDetailInfoBar
                    title={contents.title}
                    currentRecruitment={contents.currentRecruitment}
                    finalRecruitment={contents.finalRecruitment}
                    thumbnailImageUrl={contents.imageUrls[0]}
                    price={contents.price}
                    originalPrice={contents.originalPrice}
                  />
                </S.ShareDetailInfoBarWrapper>
              </S.TopFixedWrapper>
              <S.UpperWrapper>
                <ShareDetailHeader {...contents} />
                <ShareDetailInfo {...contents} infoRef={infoRef} />
              </S.UpperWrapper>
              <S.LowerWrapper>
                <UserInfoWithFollow {...contents} />
                <PreviewShareListHalfImage
                  title={`${contents.writer}님의 쉐어상품`}
                  data={writerSharesData}
                  emptyMention={noRelatedShareList}
                />
                <PreviewShareListHalfImage
                  title={offerShare}
                  data={recommendedData}
                  emptyMention={noRelatedShareList}
                />
              </S.LowerWrapper>
            </S.Wrapper>
            <ShareDetailBottomBar {...contents} isInfoBar={isInfoBar} />
          </>
        );
    }
  };

  return getContents();
};

export default ShareDetail;
