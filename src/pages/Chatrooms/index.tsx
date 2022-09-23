import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import ChatroomHeader from '@components/ChatroomHeader';
import ChatroomsItem from '@components/ChatroomsItem';
import Loading from '@components/Loading';
import { getChatDdataFailedMention } from '@constants/mentions';
import { RELOAD } from '@constants/words';
import * as S from '@pages/Chatrooms/Chatrooms.style';
import { chatroomDetailTrigger } from '@store/chatroomDetail';
import { chatroomsState } from '@store/chatrooms';

const Chatrooms = () => {
  const { contents: chatroomsData, state } = useRecoilValueLoadable(chatroomsState('entry'));
  const setChatroomsTrigger = useSetRecoilState(chatroomDetailTrigger);

  const reloadChatroomsData = () => {
    console.log('hi');
    setChatroomsTrigger((prev) => prev + 1);
  };

  const getContents = () => {
    switch (state) {
      case 'hasValue':
        const chatrooms = chatroomsData.map((info) => <ChatroomsItem key={info.id} {...info} />);
        return <>{chatrooms}</>;
      case 'hasError':
        return (
          <S.CenterWrapper>
            {getChatDdataFailedMention}
            <S.ReloadButton onClick={reloadChatroomsData}>{RELOAD}</S.ReloadButton>
          </S.CenterWrapper>
        );
      case 'loading':
        return (
          <S.CenterWrapper>
            <Loading color='orange2' size={42} border={6} />
          </S.CenterWrapper>
        );
    }
  };

  return (
    <S.Wrapper>
      <ChatroomHeader />
      {getContents()}
    </S.Wrapper>
  );
};

export default Chatrooms;
