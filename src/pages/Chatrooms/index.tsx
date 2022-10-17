import { Fragment, useEffect, useState } from 'react';

import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { deleteChatroomData } from '@api/chat';
import ChatroomsItem, { IdType } from '@components/ChatroomsItem';
import Loading from '@components/Loading';
import NoticeIcon from '@components/NoticeIcon';
import Tabs from '@components/Tabs';
import Modal from '@components/common/Modal';
import { deleteChatMention, exitMention, getChatDdataFailedMention } from '@constants/mentions';
import { CANCEL, CHATTING, RELOAD } from '@constants/words';
import useChatroomsInfo from '@hooks/useChatroomsInfo';
import * as S from '@pages/Chatrooms/Chatrooms.style';
import {
  activeChatroomsState,
  chatroomsState,
  chatroomsTrigger,
  chatroomsUpdateState,
  chatsUnreadTrigger,
} from '@store/chatrooms';
import { ChatroomsStateType } from '@type/chat';

const Chatrooms = () => {
  const chatroomsInfo = useChatroomsInfo();
  const { contents: chatroomsData, state } = useRecoilValueLoadable(chatroomsState);
  const setChatsUnreadTrigger = useSetRecoilState(chatsUnreadTrigger);
  const setChatroomsTrigger = useSetRecoilState(chatroomsTrigger);
  const setChatroomsUpdate = useSetRecoilState(chatroomsUpdateState);
  const [deletedId, setDeletedId] = useState<IdType>(null);

  const reloadChatroomsData = () => {
    setChatroomsTrigger((prev) => prev + 1);
  };

  const handleClickCancelDelete = () => {
    setDeletedId(null);
  };

  const handleClickDelete = async () => {
    if (!deletedId) return;
    const response = await deleteChatroomData(deletedId);
    if (response.status === 200) {
      setChatroomsTrigger((trigger) => trigger + 1);
      setDeletedId(null);
    }
  };

  const getContents = () => {
    switch (state) {
      case 'hasValue':
        const chatrooms = chatroomsData.map((info) => {
          if (!info.recruitmentMemberNicknames.length) return <Fragment key={info.id}></Fragment>;
          // 참여 멤버가 없을 시 채팅이 보이지 않음
          return <ChatroomsItem key={info.id} {...info} setDeletedId={setDeletedId} />;
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

  // show remained chat count when go back to chatrooms from chatroom detail
  useEffect(() => {
    setChatsUnreadTrigger((prev) => prev + 1);
    return () => setChatroomsUpdate({});
  }, []);

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
      {deletedId && (
        <Modal isFull={true} type='center' customedStyle={S.AdditionalModalStyle}>
          <S.DeleteChatModal>
            <S.DeleteChatMention>{deleteChatMention}</S.DeleteChatMention>
            <S.DeleteChatModalButtonsWrapper>
              <S.DeleteChatModalButton isCancel={true} onClick={handleClickCancelDelete}>
                {CANCEL}
              </S.DeleteChatModalButton>
              <S.DeleteChatModalButton isCancel={false} onClick={handleClickDelete}>
                {exitMention}
              </S.DeleteChatModalButton>
            </S.DeleteChatModalButtonsWrapper>
          </S.DeleteChatModal>
        </Modal>
      )}
    </S.Wrapper>
  );
};

export default Chatrooms;
