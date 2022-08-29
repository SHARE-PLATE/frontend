import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

import ChatroomDetailContents from '@components/ChatroomDetailContents';
import ChatroomDatailHeader from '@components/ChatroomDetailHeader';
import ChatroomDetailInfo from '@components/ChatroomDetailInfo';
import ChatroomError from '@components/ChatroomError';
import Loading from '@components/Loading';
import * as S from '@pages/ChatroomDetail/ChatroomDetail.style';
import { getChatroomDetail } from '@store/chatroomDetail';

const ChatroomDetail = () => {
  const { id } = useParams();
  const chatroomDetailState = getChatroomDetail(`${id}`);
  const {
    state,
    contents: { share, chats },
  } = useRecoilValueLoadable(chatroomDetailState);
  const [pageContents, setPageContents] = useState(<Loading color='grey2' size={30} border={5} />);

  useEffect(() => {
    if (state === 'hasError') {
      setPageContents(<ChatroomError mention='ERROR OCCURS!' />); // 에러 페이지 수정 필요
    }

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
  }, [state]);

  return <S.Wrapper>{pageContents}</S.Wrapper>;
};

export default ChatroomDetail;
