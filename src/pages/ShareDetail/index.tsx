import { useCallback, useEffect, useRef, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValueLoadable, useResetRecoilState } from 'recoil';

import ErrorWithButtons from '@components/ErrorWithButtons';
import Loading from '@components/Loading';
import ShareDetailBottomBar from '@components/ShareDetailBottomBar';
import ShareDetailHeader from '@components/ShareDetailHeader';
import ShareDetailInfo from '@components/ShareDetailInfo';
import ShareDetailInfoBar from '@components/ShareDetailInfoBar';
import ShareRecommanded from '@components/ShareRecommanded';
import UserInfoWithFollow from '@components/UserInfoWithFollow';
import Icon from '@components/common/Icon';
import { ERROR_GET_SHARE_INFO } from '@constants/mentions';
import useIsTopState from '@hooks/useIsTopState';
import * as S from '@pages/ShareDetail/ShareDetail.style';
import { isEntryState, shareDetailState } from '@store/shareDetail';

const ShareDetail = () => {
  const { id } = useParams();
  if (!id) return <ErrorWithButtons />;

  const shareDetailValue = shareDetailState({ id });
  const resetIsEntry = useResetRecoilState(isEntryState);
  const { state, contents: shareDetailContents } = useRecoilValueLoadable(shareDetailValue);
  const [isInfoBar, setIsInfoBar] = useState(false);
  const loadingRef = useRef<boolean>();
  const navigate = useNavigate();
  const isTop = useIsTopState();
  const infoRef = useCallback(
    (infoDiv: HTMLDivElement) => {
      const infoRefObserver = new IntersectionObserver(([entry]) => {
        if (loadingRef.current) return;
        setIsInfoBar(!entry.isIntersecting);
      });
      if (infoDiv) infoRefObserver.observe(infoDiv);
    },
    [isInfoBar],
  );

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
      resetIsEntry();
    };
  }, [id]);

  switch (state) {
    case 'loading':
      loadingRef.current = true;
      return <Loading color='grey4' size={40} border={5} />;
    case 'hasError':
      return <ErrorWithButtons mention={ERROR_GET_SHARE_INFO} />;
    case 'hasValue':
      const { isSuccess, data } = shareDetailContents;
      if (isSuccess && data) {
        loadingRef.current = false;
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
                    title={data.title}
                    currentRecruitment={data.currentRecruitment}
                    finalRecruitment={data.finalRecruitment}
                    thumbnailImageUrl={data.imageUrls[0]}
                    price={data.price}
                    originalPrice={data.originalPrice}
                  />
                </S.ShareDetailInfoBarWrapper>
              </S.TopFixedWrapper>
              <S.UpperWrapper>
                <ShareDetailHeader {...data} />
                <ShareDetailInfo {...data} infoRef={infoRef} />
              </S.UpperWrapper>
              <S.LowerWrapper>
                <UserInfoWithFollow id={id} />
                <ShareRecommanded />
              </S.LowerWrapper>
            </S.Wrapper>
            <ShareDetailBottomBar {...data} isInfoBar={isInfoBar} />
          </>
        );
      } else {
        return <ErrorWithButtons mention={ERROR_GET_SHARE_INFO} />;
      }
  }
};

export default ShareDetail;
