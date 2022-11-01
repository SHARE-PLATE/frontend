import { useState } from 'react';

import moment from 'moment';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

import { deleteChatroomData } from '@api/chat';
import * as S from '@components/ChatroomsContent/ChatroomsContent.style';
import ChatroomsItem, {
  ChatroomItemCallBackParamsType,
  IdsType,
  LongPressOption,
} from '@components/ChatroomsItem';
import { deleteChatMention, exitMention } from '@constants/mentions';
import { EXIT_CHATROOM } from '@constants/words';
import { chatMap, unsubscribeStomp } from '@socket/stomp';
import { chatroomsTrigger } from '@store/chatrooms';
import { selectModalInfoState, toastModalInfoState } from '@store/modal';
import { ChatroomsDataType } from '@type/chat';

type ChatroomsContentPropsType = {
  data: ChatroomsDataType[];
};

const ChatroomsContent = ({ data }: ChatroomsContentPropsType) => {
  const [deletedId, setDeletedId] = useState<IdsType>(null);
  const setSelectModalInfo = useSetRecoilState(selectModalInfoState);
  const setToastModalInfo = useSetRecoilState(toastModalInfoState);
  const [chatroomsData, setChatrooms] = useState(data);
  const setChatroomsTrigger = useSetRecoilState(chatroomsTrigger);
  const resetToastModalInfo = useResetRecoilState(toastModalInfoState);
  const resetDeletedId = () => setDeletedId(null);

  const updateItemTime = (targetId: number, writtenDateTime?: string) => {
    setChatrooms((prevChatrooms) => {
      let targetIndex;
      const newChatrooms = [...prevChatrooms];
      const target = newChatrooms.find(({ id }, index) => {
        targetIndex = index;
        return targetId === id;
      });

      if (!target || targetIndex === undefined) return prevChatrooms;

      const newTarget = { ...target };
      const updatedTime = moment(writtenDateTime)
        // get current time by korea time zone when written date time is undefined
        .add(writtenDateTime ? 0 : -9, 'h')
        .format('YYYY-MM-DD HH:mm');

      newTarget.recentMessageDataTime = updatedTime;
      newChatrooms[targetIndex] = newTarget;

      return newChatrooms;
    });
  };

  const handleClickSelectOkBtn = async () => {
    if (!deletedId) return;
    const { id, chatRoomMemberId } = deletedId;
    const response = await deleteChatroomData(id);
    if (response.status === 200) {
      const stompId = chatMap.get(chatRoomMemberId);
      unsubscribeStomp(stompId);
      setChatroomsTrigger((trigger) => trigger + 1);
      setDeletedId(null);
    }
  };

  const showSelectModal = () => {
    resetToastModalInfo();
    setSelectModalInfo(({ trigger }) => ({
      trigger: trigger + 1,
      onClickOkButton: handleClickSelectOkBtn,
      onClickCancelButton: resetDeletedId,
      okMention: exitMention,
      answeringMention: deleteChatMention,
    }));
  };

  const showSelectWithId = ({ event, ids }: ChatroomItemCallBackParamsType) => {
    event && event.stopPropagation();
    ids && setDeletedId(ids);
    showSelectModal();
  };

  const showToastWithId = ({ ids }: { ids: IdsType }) => {
    if (!ids) return;
    setDeletedId(ids);
    setToastModalInfo(({ trigger }) => ({
      trigger: trigger + 1,
      mainButtonTitle: EXIT_CHATROOM,
      mainButtonHandler: showSelectModal,
      onClose: resetDeletedId,
    }));
  };

  const longPressOption: LongPressOption = {
    onLongPress: showToastWithId,
  };

  const newChatrooms = chatroomsData
    .filter((info) => !!info.recruitmentMemberNicknames.length)
    .sort((prev, next) => {
      const { recentMessageDataTime: prevTime, unreadCount: prevCount } = prev;
      const { recentMessageDataTime: nextTime, unreadCount: nextCount } = next;

      if (!!prevCount && !nextCount) return -1;
      if (!prevCount && !!nextCount) return 1;

      const isPrevEalier = moment.duration(moment(nextTime).diff(moment(prevTime))).asSeconds();
      return isPrevEalier;
    })
    .map((info) => (
      <ChatroomsItem
        key={info.id}
        longPressOption={longPressOption}
        onClickExitBtn={showSelectWithId}
        onChatroomUpdated={updateItemTime}
        {...info}
      />
    ));

  return <S.ContentsWrapper>{newChatrooms}</S.ContentsWrapper>;
};

export default ChatroomsContent;
