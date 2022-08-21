import { ReactElement, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

import ChattingDetailContents from '@components/ChattingDetailContents';
import ChattingDatailHeader from '@components/ChattingDetailHeader';
import ChattingDetailInfo from '@components/ChattingDetailInfo';
import ChattingError from '@components/ChattingError';
import LoadingAnimation from '@components/LoadingAnimation';
import * as S from '@pages/ChattingDetail/ChattingDetail.style';
import { getChattingDetailsData } from '@store/chattingDetail';

import { testChattingDetailData } from './chattingDetailData';

const ChattingDetail = () => {
  const Loading = (
    <S.LoadingWrapper>
      <LoadingAnimation color='grey2' size={20} border={5} />
    </S.LoadingWrapper>
  );

  const { id } = useParams();
  const {
    state,
    contents: { share, chats },
  } = useRecoilValueLoadable(getChattingDetailsData(`${id}`));
  const [pageContents, setPageContents] = useState<ReactElement>(Loading);

  useEffect(() => {
    if (state === 'hasValue') {
      setPageContents(
        <>
          <S.TopFixedWrapper>
            <ChattingDatailHeader />
            <ChattingDetailInfo {...share} />
          </S.TopFixedWrapper>
          <ChattingDetailContents chats={chats} />
        </>,
      );
    }
    if (state === 'hasError') {
      setPageContents(
        <>
          <S.TopFixedWrapper>
            <ChattingDatailHeader />
            <ChattingDetailInfo {...testChattingDetailData.share} />
          </S.TopFixedWrapper>
          <ChattingDetailContents chats={testChattingDetailData.chats} />
        </>,
      );
      // setPageContents(<ChattingError />); // 실제 에러 시 사용
    }
  }, [state]);

  return <S.Wrapper>{pageContents}</S.Wrapper>;
};

export default ChattingDetail;
