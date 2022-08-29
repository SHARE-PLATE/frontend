import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

import ChatroomDetailContents from '@components/ChatroomDetailContents';
import ChatroomDatailHeader from '@components/ChatroomDetailHeader';
import ChatroomDetailInfo from '@components/ChatroomDetailInfo';
// import ChatroomError from '@components/ChatroomError';
import Loading from '@components/Loading';
import * as S from '@pages/ChatroomDetail/ChatroomDetail.style';
import { getChatroomDetail } from '@store/chatroomDetail';

import { testChatroomDetailData } from './chatroomDetailData';

const ChatroomDetail = () => {
  const { id } = useParams();
  const chatroomDetailState = getChatroomDetail(`${id}`);
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
            <ChatroomDatailHeader />
            <ChatroomDetailInfo {...share} />
          </S.TopFixedWrapper>
          <ChatroomDetailContents chats={chats} />
        </>,
      );
    }
    if (state === 'hasError') {
      setPageContents(
        <>
          <S.TopFixedWrapper>
            <ChatroomDatailHeader />
            <ChatroomDetailInfo {...testChatroomDetailData.share} />
          </S.TopFixedWrapper>
          <ChatroomDetailContents chats={testChatroomDetailData.chats} />
        </>, // api 정상 작동 시 삭제
      );
      // setPageContents(<ChatroomError />); // 실제 에러 시 사용
    }
  }, [state]);

  return <S.Wrapper>{pageContents}</S.Wrapper>;
};

export default ChatroomDetail;
