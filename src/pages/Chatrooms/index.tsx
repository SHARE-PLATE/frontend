import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import ChatroomsItem from '@components/ChatroomsItem';
import Loading from '@components/Loading';
import NoticeIcon from '@components/NoticeIcon';
import Tabs from '@components/Tabs';
import { getChatDdataFailedMention } from '@constants/mentions';
import { CHATTING, RELOAD } from '@constants/words';
import useChatroomsInfo from '@hooks/useChatroomsInfo';
import * as S from '@pages/Chatrooms/Chatrooms.style';
import {
  activeChatroomsState,
  chatroomsState,
  ChatroomsStateType,
  chatroomsTrigger,
} from '@store/chatrooms';

const Chatrooms = () => {
  const chatroomsInfo = useChatroomsInfo();
  const { contents: chatroomsData, state } = useRecoilValueLoadable(chatroomsState);
  const setChatroomsTrigger = useSetRecoilState(chatroomsTrigger);

  const reloadChatroomsData = () => {
    setChatroomsTrigger((prev) => prev + 1);
  };

  const getContents = () => {
    switch (state) {
      case 'hasValue':
        const chatrooms = chatroomsData.map((info) => <ChatroomsItem key={info.id} {...info} />);
        return <S.ContentsWrapper>{chatrooms}</S.ContentsWrapper>;
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
      <S.HeaderWrapper>
        <S.Header>
          <S.HeaderTitle>{CHATTING}</S.HeaderTitle>
          <NoticeIcon noticeOnIcon='NoticeOn' noticeOffIcon='NoticeOff' iconSize={1.5} />
        </S.Header>
        <Tabs<ChatroomsStateType> tabsInfo={chatroomsInfo} targetAtom={activeChatroomsState} />
      </S.HeaderWrapper>
      {getContents()}
    </S.Wrapper>
  );
};

export default Chatrooms;
