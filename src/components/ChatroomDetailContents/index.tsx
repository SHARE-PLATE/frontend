import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import moment from 'moment';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { v4 as createRandomKey } from 'uuid';

import Chat from '@components/Chat';
import ChatroomBar from '@components/ChatroomBar';
import * as S from '@components/ChatroomDetailContents/ChatroomDetailContents.style';
import { chatMap, subscribeChat } from '@socket/stomp';
import { useUpdateChat } from '@socket/useUpdateChat';
import { chatUpdateState } from '@store/chatrooms';
import { socketConnectState } from '@store/socket';
import { ChatroomDetailChatsType, ChatroomDetailChatType } from '@type/chat';

type ChatroomDetailContentsPropsType = {
  chats: ChatroomDetailChatsType;
  chatRoomMemberId: number;
  chatroomId: number;
};

const ChatroomDetailContents = ({
  chats,
  chatRoomMemberId,
  chatroomId,
}: ChatroomDetailContentsPropsType) => {
  const [curChats, setCurChats] = useState(chats);
  const [blockHeight, setBlockHeight] = useState(0);
  const stompId = chatMap.get(chatRoomMemberId);
  const updateChat = useUpdateChat();
  const socketConnect = useRecoilValue(socketConnectState);
  const resetChatUpdate = useResetRecoilState(chatUpdateState);
  const {
    id: updatedId,
    chat: updatedChat,
    trigger: chatUpdateTrigger,
  } = useRecoilValue(chatUpdateState);
  const dateRef = useRef('');
  const lastBlockRef = useRef<HTMLDivElement>();
  //**callback ref for scroll to bottom */
  const scrollToBottomRef = useCallback((lastChatDiv: HTMLDivElement) => {
    if (!lastChatDiv) return;
    // change target only if last chat didn't exist
    lastBlockRef.current = lastChatDiv;
    lastChatDiv.scrollIntoView();
  }, []);

  const scrollToBottom = () => {
    lastBlockRef.current?.scrollIntoView({ block: 'end' });
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

  const changeBlockHeight = (height: number) => {
    setBlockHeight(height);
    scrollToBottom();
  };

  const chatroomLogs = useMemo(() => {
    dateRef.current = '';
    return curChats.map(getSingleChat);
  }, [curChats]);

  useEffect(() => {
    // when use question chat in share detail page
    if (!stompId && socketConnect)
      subscribeChat({ onReceiveChat: updateChat, chatroomId: chatRoomMemberId });

    // delete updated info when occurs in this page (updated info should exists for chatrooms page not chatroom detail page)
    return () => {
      resetChatUpdate();
    };
  }, []);

  useEffect(() => {
    if (chatRoomMemberId !== updatedId || !updatedChat) return;
    setCurChats((chats) => [...chats, updatedChat]);
    scrollToBottom();
  }, [chatUpdateTrigger]);

  return (
    <>
      <S.Wrapper>
        {chatroomLogs}
        <S.LastBottomBlock ref={scrollToBottomRef} blockHeight={blockHeight} />
      </S.Wrapper>
      <ChatroomBar chatroomId={Number(chatroomId)} onHeightChange={changeBlockHeight} />
    </>
  );
};

export default ChatroomDetailContents;
