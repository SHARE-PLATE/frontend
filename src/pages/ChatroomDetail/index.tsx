import { useState } from 'react';
import { useCallback } from 'react';

import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

import ChatroomBar from '@components/ChatroomBar';
import ChatroomDetailContents from '@components/ChatroomDetailContents';
import ChatroomDatailHeader from '@components/ChatroomDetailHeader';
import ChatroomDetailInfo from '@components/ChatroomDetailInfo';
import Loading from '@components/Loading';
import Icon from '@components/common/Icon';
import { failLoadingChatroomsMention } from '@constants/mentions';
import * as S from '@pages/ChatroomDetail/ChatroomDetail.style';
import { chatroomDetailState } from '@store/chatroomDetail';

const ChatroomDetail = () => {
  const { id } = useParams();
  const [lastChat, setLastChat] = useState<HTMLDivElement>();
  const chatroomDetail = chatroomDetailState(id || '');
  const {
    state,
    contents: { share, chats },
  } = useRecoilValueLoadable(chatroomDetail);

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
        return (
          <S.ErrorWrapper>
            <Icon iconName='Search' iconSize={30} />
            {failLoadingChatroomsMention}
          </S.ErrorWrapper>
        );

      case 'hasValue':
        return (
          <>
            <ChatroomBar chatroomId={id || ''} scrollToBottom={scrollToBottom} />
            <S.TopFixedWrapper>
              <ChatroomDatailHeader />
              <ChatroomDetailInfo {...share} />
            </S.TopFixedWrapper>
            <ChatroomDetailContents
              chats={chats}
              chatroomId={id || ''}
              scrollToBottomRef={scrollToBottomRef}
            />
          </>
        );

      case 'loading':
        return (
          <S.LoadingWrapper>
            <Loading color='grey2' size={30} border={5} />
          </S.LoadingWrapper>
        );
    }
  };

  return <S.Wrapper>{getContents()}</S.Wrapper>;
};

export default ChatroomDetail;
