import { useRecoilValueLoadable } from 'recoil';

import ChatroomHeader from '@components/ChatroomHeader';
import ChatroomsItem from '@components/ChatroomsItem';
import Loading from '@components/Loading';
import * as S from '@pages/Chatrooms/Chatrooms.style';
import { chatroomsState } from '@store/chatrooms';

const Chatrooms = () => {
  const { contents: chatroomsData, state } = useRecoilValueLoadable(chatroomsState('entry'));

  const getContents = () => {
    switch (state) {
      case 'hasValue':
        return chatroomsData.map((info) => <ChatroomsItem key={info.id} {...info} />);
      case 'hasError':
        return <div>ERROR OCCURS!</div>;
      case 'loading':
        return (
          <S.LoadingWrapper>
            <Loading color='orange2' size={60} border={6} />
          </S.LoadingWrapper>
        );
    }
  };

  return (
    <S.Wrapper>
      <ChatroomHeader />
      <S.ContentWrapper>{getContents()}</S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Chatrooms;
