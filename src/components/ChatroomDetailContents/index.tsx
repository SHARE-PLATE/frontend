import { useMemo, useState } from 'react';

import { v4 as createRandomKey } from 'uuid';

import Chat from '@components/Chat';
import * as S from '@components/ChatroomDetailContents/ChatroomDetailContents.style';
import { TestChatroomDetailChatsType } from '@pages/ChatroomDetail/chatroomDetailData';
import { chatroomConnect } from '@pages/ChatroomDetail/socket';

type ChatroomDetailContentsPropsType = {
  chats: TestChatroomDetailChatsType;
};

const ChatroomDetailContents = ({ chats }: ChatroomDetailContentsPropsType) => {
  // const [date, setDate] = useState('');
  const [curChats, setCurChats] = useState(chats);
  const chatroomLogs = curChats.map((info) => <Chat {...info} key={createRandomKey()} />);

  useMemo(() => {
    chatroomConnect({ setter: setCurChats });
  }, []);

  return (
    <S.Wrapper>
      <S.Date>2021년 5월 29일</S.Date>
      <S.Chats>{chatroomLogs}</S.Chats>
    </S.Wrapper>
  );
};

export default ChatroomDetailContents;
