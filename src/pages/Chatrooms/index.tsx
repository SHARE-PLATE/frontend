import { useEffect, useState } from 'react';

import { useRecoilValueLoadable } from 'recoil';

import ChatroomHeader from '@components/ChatroomHeader';
import ChatroomsItem from '@components/ChatroomsItem';
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

    if (state === 'hasError') {
      setContent(<div>ERROR OCCURS!</div>);
    }
  }, [state]);

  return (
    <S.Wrapper>
      <div>
        <ChatroomHeader />
      </div>
      <S.ContentWrapper state={state}>{content}</S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Chatrooms;
