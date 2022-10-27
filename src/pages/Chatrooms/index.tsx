import { useEffect, useState } from 'react';

import {
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';

import ChatroomsContent from '@components/ChatroomsContent';
import Loading from '@components/Loading';
import NoticeIcon from '@components/NoticeIcon';
import Tabs from '@components/Tabs';
import TopFixedWarning from '@components/TopFixedWarning';
import { getChatDdataFailedMention } from '@constants/mentions';
import { CHATTING, RELOAD } from '@constants/words';
import useChatroomsInfo from '@hooks/useChatroomsInfo';
import * as S from '@pages/Chatrooms/Chatrooms.style';
import {
  activeChatroomsState,
  chatroomsState,
  chatroomsTrigger,
  chatUpdateState,
  chatsUnreadTrigger,
} from '@store/chatrooms';
import { ChatroomsStateType } from '@type/chat';

const Chatrooms = () => {
  const chatroomsInfo = useChatroomsInfo();
  const { contents: chatroomsData, state } = useRecoilValueLoadable(chatroomsState);
  const setChatsUnreadTrigger = useSetRecoilState(chatsUnreadTrigger);
  const setChatroomsTrigger = useSetRecoilState(chatroomsTrigger);
  const resetChatUpdate = useResetRecoilState(chatUpdateState);
  const activeChatrooms = useRecoilValue(activeChatroomsState);
  const [isConnected, setIsConnected] = useState(false);

  const reloadChatroomsData = () => {
    setChatroomsTrigger((prev) => prev + 1);
  };

  const getContents = () => {
    switch (state) {
      case 'hasValue':
        if (!chatroomsData.length) return <div></div>;
        return <ChatroomsContent data={chatroomsData} />;
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

  // show remained chat count when go back to chatrooms from chatroom detail
  useEffect(() => {
    setChatsUnreadTrigger((prev) => prev + 1);
    return () => resetChatUpdate();
  }, []);

  useEffect(() => {
    reloadChatroomsData();
  }, [activeChatrooms]);

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <TopFixedWarning text='채팅 연결 끊김' otherStyle={S.TopFixedWarningStyle} />
        <S.Header onClick={() => setIsConnected(!isConnected)}>
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
