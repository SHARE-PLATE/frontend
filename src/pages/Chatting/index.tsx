import { useState } from 'react';

import ChattingHeader from '@components/ChattingHeader';
import ChattingListItem from '@components/ChattingListItem';
import { testChattingsInfo } from '@data/testChattingsInfo';
import * as S from '@pages/Chatting/Chatting.style';

const Chatting = () => {
  const ChattingList = testChattingsInfo.map((info) => (
    <ChattingListItem key={info.id} {...info} />
  ));

  return (
    <S.Wrapper>
      <div>
        <ChattingHeader />
      </div>
      <div>{ChattingList}</div>
    </S.Wrapper>
  );
};

export default Chatting;
