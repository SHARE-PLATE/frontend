import { useMemo, useState } from 'react';

import { v4 as createRandomKey } from 'uuid';

import Chat from '@components/Chat';
import * as S from '@components/ChattingDetailContents/ChattingDetailContents.style';
import { TestChattingDetailChatsType } from '@pages/ChattingDetail/chattingDetailData';
import { chattingConnect } from '@pages/ChattingDetail/socket';

type ChattingDetailContentsPropsType = {
  chats: TestChattingDetailChatsType;
};

const ChattingDetailContents = ({ chats }: ChattingDetailContentsPropsType) => {
  // const [date, setDate] = useState('');
  const [curChats, setCurChats] = useState(chats);
  const chattingLogs = curChats.map((info) => <Chat {...info} key={createRandomKey()} />);

  useMemo(() => {
    chattingConnect({ setter: setCurChats });
  }, []);

  return (
    <S.Wrapper>
      <S.Date>2021년 5월 29일</S.Date>
      <S.Chats>{chattingLogs}</S.Chats>
    </S.Wrapper>
  );
};

export default ChattingDetailContents;
