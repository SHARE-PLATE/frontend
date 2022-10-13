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
  chatroomsTrigger,
  chatsUnreadTrigger,
} from '@store/chatrooms';
import { ChatroomsStateType } from '@type/chat';

const Chatrooms = () => {
  const chatroomsInfo = useChatroomsInfo();
  const { contents: chatroomsData, state } = useRecoilValueLoadable(chatroomsState);
  const setChatsUnreadTrigger = useSetRecoilState(chatsUnreadTrigger);
  const setChatroomsTrigger = useSetRecoilState(chatroomsTrigger);

  const reloadChatroomsData = () => {
    setChatroomsTrigger((prev) => prev + 1);
  };

  const getContents = () => {
    switch (state) {
      case 'hasValue':
        const chatrooms = chatroomsData.map((info) => {
          if (!info.recruitmentMemberNicknames.length) return <></>;
          // 참여 멤버가 없을 시 채팅이 보이지 않음
          return <ChatroomsItem key={info.id} {...info} />;
        });
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
            <Loading color='grey3' size={42} border={6} height='100%' />
          </S.CenterWrapper>
        );
    }
  };

  setChatsUnreadTrigger((prev) => prev + 1);

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
