import { useEffect, useState } from 'react';

import { v4 as createRandomKey } from 'uuid';

import Chat from '@components/Chat';
import * as S from '@components/ChatroomDetailContents/ChatroomDetailContents.style';
import { connectChat } from '@socket/chatroomSocket';
import { ChatroomDetailChatsType } from '@type/chat';

type ChatroomDetailContentsPropsType = {
  chats: ChatroomDetailChatsType;
  chatroomId: string;
  scrollToBottomRef: (lastChat: HTMLDivElement) => void;
};

const ChatroomDetailContents = ({
  chats,
  chatroomId,
  scrollToBottomRef,
}: ChatroomDetailContentsPropsType) => {
  // const [date, setDate] = useState('');
  const [curChats, setCurChats] = useState(chats);
  const chatroomLogs = curChats.map((info) => <Chat {...info} key={createRandomKey()} />);

  useEffect(() => {
    const { chatroomDisconnect, chatroomConnect } = connectChat();
    chatroomConnect({ setter: setCurChats, chatroomId });
    return () => chatroomDisconnect();
  }, []);

  return (
    <S.Wrapper>
      <S.Date>2021년 5월 29일</S.Date>
      <S.Chats>
        {chatroomLogs}
        <S.EmptyBlock ref={scrollToBottomRef} />
      </S.Chats>
    </S.Wrapper>
  );
};

export default ChatroomDetailContents;
