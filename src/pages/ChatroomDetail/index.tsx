import { useEffect, useState } from 'react';
import { useCallback } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { putChatUpdateReadTime } from '@api/chat';
import ChatroomBar from '@components/ChatroomBar';
import ChatroomDetailContents from '@components/ChatroomDetailContents';
import ChatroomDatailHeader from '@components/ChatroomDetailHeader';
import ChatroomDetailInfo from '@components/ChatroomDetailInfo';
import ErrorWithButtons from '@components/ErrorWithButtons';
import Loading from '@components/Loading';
import { failLoadingChatroomsMention } from '@constants/mentions';
import * as S from '@pages/ChatroomDetail/ChatroomDetail.style';
import { chatroomDetailState, chatroomDetailTrigger } from '@store/chatroomDetail';
import { chatroomsTrigger, chatroomsUpdateState, chatsUnreadTrigger } from '@store/chatrooms';
import { getTimeDiff } from '@utils/getTimeDiff';

const ChatroomDetail = () => {
  const { id } = useParams();
  const ErrorPage = (
    <S.ErrorWrapper>
      <ErrorWithButtons mention={failLoadingChatroomsMention} buttonType='back' />
    </S.ErrorWrapper>
  );
  if (!id) return ErrorPage;

  const [lastChat, setLastChat] = useState<HTMLDivElement>();
  const chatroomDetail = chatroomDetailState({ id });
  const { state, contents } = useRecoilValueLoadable(chatroomDetail);
  const setChatroomsTrigger = useSetRecoilState(chatroomsTrigger);
  const setChatroomsUpdate = useSetRecoilState(chatroomsUpdateState);
  const setChatsUnreadTrigger = useSetRecoilState(chatsUnreadTrigger);
  const setchatroomDetailTrigger = useSetRecoilState(chatroomDetailTrigger);

  //**callback ref for scroll to bottom */
  const scrollToBottomRef = useCallback((lastChatDiv: HTMLDivElement) => {
    if (!lastChatDiv) return;
    // change target only if last chat didn't exist
    setLastChat((prevLastChat) => (prevLastChat ? prevLastChat : lastChatDiv));
    lastChatDiv.scrollIntoView({ block: 'end' });
  }, []);

  const scrollToBottom = () => {
    if (!lastChat) return;
    lastChat.scrollIntoView({ block: 'end' });
  };

  const getContents = () => {
    switch (state) {
      case 'hasError':
        return ErrorPage;

      case 'hasValue':
        const { share, chats, chatRoomMemberId, type } = contents;
        const { writer, closedDateTime } = share;
        const remainingTime = getTimeDiff(closedDateTime);

        return (
          <S.Wrapper>
            <ChatroomBar chatroomId={id || ''} scrollToBottom={scrollToBottom} />
            <S.RemainingTime>남은 시간 : {remainingTime}</S.RemainingTime>
            <S.TopFixedWrapper>
              <ChatroomDatailHeader type={type} writer={writer} />
              <ChatroomDetailInfo {...share} />
            </S.TopFixedWrapper>
            <ChatroomDetailContents
              chats={chats}
              chatroomId={chatRoomMemberId || ''}
              scrollToBottomRef={scrollToBottomRef}
            />
          </S.Wrapper>
        );

      case 'loading':
        return <Loading color='grey4' size={42} border={6} height='100vh' />;
    }
  };

  useEffect(() => {
    return () => {
      // update read time when exit this page
      putChatUpdateReadTime({ chatRoomId: id });
      // reload chats that made during this render
      setchatroomDetailTrigger((prev) => prev + 1);

      // reflect chats that occur this render on 'chatrooms' and 'chats unread'
      setChatroomsTrigger((prev) => prev + 1);
      setChatsUnreadTrigger((prev) => prev + 1);
      // delete updated info when occurs in this page (updated info should exists for chatrooms page not chatroom detail page)
      setChatroomsUpdate({});
    };
  }, []);

  return getContents();
};

export default ChatroomDetail;
