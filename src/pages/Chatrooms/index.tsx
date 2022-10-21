import { Fragment, useEffect, useRef, useState } from 'react';

import { useRecoilValueLoadable, useResetRecoilState, useSetRecoilState } from 'recoil';

import { deleteChatroomData } from '@api/chat';
import ChatroomsItem, {
  ChatroomItemCallBackParamsType,
  IdType,
  LongPressOption,
} from '@components/ChatroomsItem';
import Loading from '@components/Loading';
import NoticeIcon from '@components/NoticeIcon';
import Tabs from '@components/Tabs';
import ToastModal from '@components/ToastModal';
import SelectModal from '@components/common/SelectModal';
import { deleteChatMention, exitMention, getChatDdataFailedMention } from '@constants/mentions';
import { CHATTING, EXIT_CHATROOM, RELOAD } from '@constants/words';
import useChatroomsInfo from '@hooks/useChatroomsInfo';
import useModal from '@hooks/useModal';
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
  const modalRef = useRef<HTMLDivElement>(null);
  const [deletedId, setDeletedId] = useState<IdType>(null);
  const [isToastModal, setIsToastModal] = useState(false);
  const [isSelectModal, setIsSelectModal] = useModal({ modalRef });

  const reloadChatroomsData = () => {
    setChatroomsTrigger((prev) => prev + 1);
  };

  const hideToast = () => {
    setDeletedId(null);
    setIsToastModal(false);
  };

  const hideToastAndShowSelect = () => {
    setIsToastModal(false);
    setIsSelectModal(true);
  };

  const showSelectWithId = ({ event, id }: ChatroomItemCallBackParamsType) => {
    event && event.stopPropagation();
    id && setDeletedId(id);
    setIsSelectModal(true);
  };

  const handleClickSelectOkBtn = async () => {
    if (!deletedId) return;
    const response = await deleteChatroomData(deletedId);
    if (response.status === 200) {
      setChatroomsTrigger((trigger) => trigger + 1);
      setDeletedId(null);
    }
  };

  const hideSelect = () => {
    setIsSelectModal(false);
    setDeletedId(null);
  };

  const showToastWithId = ({ id }: { id?: string }) => {
    if (!id) return;
    setDeletedId(id);
    setIsToastModal(true);
  };

  const longPressOption: LongPressOption = {
    onLongPress: showToastWithId,
  };

  const getContents = () => {
    switch (state) {
      case 'hasValue':
        const chatrooms = chatroomsData.map((info) => {
          if (!info.recruitmentMemberNicknames.length) return <Fragment key={info.id}></Fragment>;
          // 참여 멤버가 없을 시 채팅이 보이지 않음
          return (
            <ChatroomsItem
              key={info.id}
              longPressOption={longPressOption}
              onClickExitBtn={showSelectWithId}
              {...info}
            />
          );
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
    reloadChatroomsData();
    setChatsUnreadTrigger((prev) => prev + 1);
    return () => resetChatUpdate();
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
      {isToastModal && (
        <ToastModal
          modalRef={modalRef}
          onClickCloseButton={hideToast}
          mainButtonTitle={EXIT_CHATROOM}
          mainButtonHandler={hideToastAndShowSelect}
          onClickBackground={hideToast}
        />
      )}
      {isSelectModal && (
        <SelectModal
          modalRef={modalRef}
          onClickOkButton={handleClickSelectOkBtn}
          onClickCancelButton={hideSelect}
          okMention={exitMention}
          answeringMention={deleteChatMention}
        />
      )}
    </S.Wrapper>
  );
};

export default Chatrooms;
