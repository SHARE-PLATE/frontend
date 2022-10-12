import { useState } from 'react';
import { useCallback } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

import ChatroomBar from '@components/ChatroomBar';
import ChatroomDetailContents from '@components/ChatroomDetailContents';
import ChatroomDatailHeader from '@components/ChatroomDetailHeader';
import ChatroomDetailInfo from '@components/ChatroomDetailInfo';
import HomeLogin from '@components/HomeLogin';
import Loading from '@components/Loading';
import { failLoadingChatroomsMention } from '@constants/mentions';
import * as S from '@pages/ChatroomDetail/ChatroomDetail.style';
import { chatroomDetailState } from '@store/chatroomDetail';

const ChatroomDetail = () => {
  const { id } = useParams();
  const ErrorPage = (
    <S.ErrorWrapper>
      <HomeLogin mention={failLoadingChatroomsMention} />
    </S.ErrorWrapper>
  );
  if (!id) return ErrorPage;

  const [lastChat, setLastChat] = useState<HTMLDivElement>();
  const chatroomDetail = chatroomDetailState({ id });
  const { state, contents } = useRecoilValueLoadable(chatroomDetail);

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
        const { share, chats, chatRoomMemberId } = contents;
        const { type, writer } = share;

        return (
          <S.Wrapper>
            <ChatroomBar chatroomId={id || ''} scrollToBottom={scrollToBottom} />
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

  return getContents();
};

export default ChatroomDetail;
