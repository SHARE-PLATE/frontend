import { useEffect, useState } from 'react';

import { useRecoilValueLoadable } from 'recoil';

import ChatroomsItem from '@components/ChatroomsItem';
import ChattingHeader from '@components/ChattingHeader';
import Loading from '@components/Loading';
import * as S from '@pages/Chatrooms/Chatrooms.style';
import { chatroomsState } from '@store/chatrooms';

const Chatrooms = () => {
  const { contents: chatroomsData, state } = useRecoilValueLoadable(chatroomsState);
  const [content, setContent] = useState(<Loading color='orange2' size={60} border={6} />);

  useEffect(() => {
    if (state === 'hasValue') {
      const chatrooms = chatroomsData.map((info) => <ChatroomsItem key={info.id} {...info} />);
      setContent(<>{chatrooms}</>);
    }
  }, [state]);

  return (
    <S.Wrapper>
      <div>
        <ChattingHeader />
      </div>
      <S.ContentWrapper state={state}>{content}</S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Chatrooms;
