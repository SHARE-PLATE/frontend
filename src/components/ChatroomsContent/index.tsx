import { useRef, useState } from 'react';

import moment from 'moment';
import { useSetRecoilState } from 'recoil';

import { deleteChatroomData } from '@api/chat';
import * as S from '@components/ChatroomsContent/ChatroomsContent.style';
import ChatroomsItem, {
  ChatroomItemCallBackParamsType,
  IdsType,
  LongPressOption,
} from '@components/ChatroomsItem';
import ToastModal from '@components/ToastModal';
import SelectModal from '@components/common/SelectModal';
import { deleteChatMention, exitMention } from '@constants/mentions';
import { EXIT_CHATROOM } from '@constants/words';
import useModal from '@hooks/useModal';
import { chatMap, unsubscribeStomp } from '@socket/stomp';
import { chatroomsTrigger } from '@store/chatrooms';
import { ChatroomsDataType } from '@type/chat';

type ChatroomsContentPropsType = {
  data: ChatroomsDataType[];
};

const ChatroomsContent = ({ data }: ChatroomsContentPropsType) => {
  const [deletedId, setDeletedId] = useState<IdsType>(null);
  const [chatroomsData, setChatrooms] = useState(data);
  const modalRef = useRef<HTMLDivElement>(null);
  const setChatroomsTrigger = useSetRecoilState(chatroomsTrigger);
  const [isToastModal, setIsToastModal] = useState(false);
  const [isSelectModal, setIsSelectModal] = useModal({ modalRef });

  const hideToast = () => {
    setDeletedId(null);
    setIsToastModal(false);
  };

  const hideToastAndShowSelect = () => {
    setIsToastModal(false);
    setIsSelectModal(true);
  };

  const showSelectWithId = ({ event, ids }: ChatroomItemCallBackParamsType) => {
    event && event.stopPropagation();
    ids && setDeletedId(ids);
    setIsSelectModal(true);
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
    setIsSelectModal(false);
  };

  const hideSelect = () => {
    setIsSelectModal(false);
    setDeletedId(null);
  };

  const showToastWithId = ({ ids }: { ids: IdsType }) => {
    if (!ids) return;
    setDeletedId(ids);
    setIsToastModal(true);
  };

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

  return (
    <>
      <S.ContentsWrapper>{newChatrooms}</S.ContentsWrapper>
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
    </>
  );
};

export default ChatroomsContent;
