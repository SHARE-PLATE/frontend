// import { useState } from 'react';

import Chat from '@components/Chat';
import * as S from '@components/ChattingDetailContents/ChattingDetailContents.style';
import { TestChattingDetailChatsType } from '@pages/ChattingDetail/chattingDetailData';

type ChattingDetailContentsPropsType = {
  chats: TestChattingDetailChatsType;
};

const ChattingDetailContents = ({ chats }: ChattingDetailContentsPropsType) => {
  // const [date, setDate] = useState('');
  const chattingLogs = chats.map((info) => <Chat {...info} />);

  return (
    <S.Wrapper>
      <S.Date>2021년 5월 29일</S.Date>
      <S.Chats>{chattingLogs}</S.Chats>
    </S.Wrapper>
  );
};

export default ChattingDetailContents;
