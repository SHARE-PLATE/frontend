import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import moment from 'moment';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { v4 as createRandomKey } from 'uuid';

import Chat from '@components/Chat';
import * as S from '@components/ChatroomDetailContents/ChatroomDetailContents.style';
import { chatMap, stompClient, subscribeChat } from '@socket/stomp';
import { useOnReceiveChat } from '@socket/useConnectSocket';
import { chatUpdateState } from '@store/chatrooms';
import { socketConnectState } from '@store/socket';
import { ChatroomDetailChatsType, ChatroomDetailChatType } from '@type/chat';

type ChatroomDetailContentsPropsType = {
  chats: ChatroomDetailChatsType;
  chatroomId: number;
};

const ChatroomDetailContents = ({ chats, chatroomId }: ChatroomDetailContentsPropsType) => {
  const [curChats, setCurChats] = useState(chats);
  const stompId = chatMap.get(chatroomId);
  const onReceiveChat = useOnReceiveChat();
  const socketConnect = useRecoilValue(socketConnectState);
  const resetChatUpdate = useResetRecoilState(chatUpdateState);
  const {
    id: updatedId,
    chat: updatedChat,
    trigger: chatUpdateTrigger,
  } = useRecoilValue(chatUpdateState);
  const dateRef = useRef('');
  const lastChatRef = useRef<HTMLDivElement>();
  //**callback ref for scroll to bottom */
  const scrollToBottomRef = useCallback((lastChatDiv: HTMLDivElement) => {
    if (!lastChatDiv) return;
    // change target only if last chat didn't exist
    lastChatRef.current = lastChatDiv;
    lastChatDiv.scrollIntoView();
  }, []);

  const scrollToBottom = () => {
    lastChatRef.current?.scrollIntoView({ block: 'end' });
  };

  const getSingleChat = (info: ChatroomDetailChatType) => {
    const { writtenDateTime } = info;
    const curDate = writtenDateTime.split(' ')[0];
    const isSameDate = curDate === dateRef.current;
    if (isSameDate) {
      return <Chat {...info} key={createRandomKey()} />;
    } else {
      dateRef.current = curDate;
      const showedDate = moment(curDate).format('YYYY년 MM월 DD일');
      return (
        <Fragment key={createRandomKey()}>
          <S.Date>{showedDate}</S.Date>
          <Chat {...info} />
        </Fragment>
      );
    }
  };

  const chatroomLogs = useMemo(() => {
    dateRef.current = '';
    return curChats.map(getSingleChat);
  }, [curChats]);

  useEffect(() => {
    // when use question chat in share detail page
    if (!stompId && socketConnect) subscribeChat({ onReceiveChat, chatroomId });

    // delete updated info when occurs in this page (updated info should exists for chatrooms page not chatroom detail page)
    return () => {
      resetChatUpdate();
    };
  }, []);

  useEffect(() => {
    if (chatroomId !== updatedId || !updatedChat) return;
    setCurChats((chats) => [...chats, updatedChat]);
    scrollToBottom();
  }, [chatUpdateTrigger]);

  return (
    <S.Wrapper>
      {chatroomLogs}
      <S.LastBottomBlock ref={scrollToBottomRef} />
    </S.Wrapper>
  );
};

export default ChatroomDetailContents;
