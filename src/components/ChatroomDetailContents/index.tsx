import { useEffect, useMemo, useState } from 'react';

import { v4 as createRandomKey } from 'uuid';

import Chat from '@components/Chat';
import * as S from '@components/ChatroomDetailContents/ChatroomDetailContents.style';
import { TestChatroomDetailChatsType } from '@pages/ChatroomDetail/chatroomDetailData';
import { chatroomConnect, chatroomDisconnect } from '@pages/ChatroomDetail/socket';

type ChatroomDetailContentsPropsType = {
  chats: TestChatroomDetailChatsType;
  chatroomId: string;
};

const ChatroomDetailContents = ({ chats, chatroomId }: ChatroomDetailContentsPropsType) => {
  // const [date, setDate] = useState('');
  const [curChats, setCurChats] = useState(chats);
  const chatroomLogs = curChats.map((info) => <Chat {...info} key={createRandomKey()} />);

  useMemo(() => {
    chatroomConnect({ setter: setCurChats, chatroomId });
  }, []);

  useEffect(() => {
    return chatroomDisconnect;
  }, []);

  return (
    <S.Wrapper>
      <S.Date>2021년 5월 29일</S.Date>
      <S.Chats>{chatroomLogs}</S.Chats>
    </S.Wrapper>
  );
};

export default ChatroomDetailContents;
