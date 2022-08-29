import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

import ChattingDetailContents from '@components/ChattingDetailContents';
import ChattingDatailHeader from '@components/ChattingDetailHeader';
import ChattingDetailInfo from '@components/ChattingDetailInfo';
// import ChattingError from '@components/ChattingError';
import Loading from '@components/Loading';
import * as S from '@pages/ChattingDetail/ChattingDetail.style';
import { getChatroomsDetail } from '@store/chattingDetail';

import { testChattingDetailData } from './chattingDetailData';

const ChattingDetail = () => {
  const { id } = useParams();
  const chatroomDetailState = getChatroomsDetail(`${id}`);
  const {
    state,
    contents: { share, chats },
  } = useRecoilValueLoadable(chatroomDetailState);
  const [pageContents, setPageContents] = useState(<Loading color='grey2' size={30} border={5} />);

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
        </>, // api 정상 작동 시 삭제
      );
      // setPageContents(<ChattingError />); // 실제 에러 시 사용
    }
  }, [state]);

  return <S.Wrapper>{pageContents}</S.Wrapper>;
};

export default ChattingDetail;
