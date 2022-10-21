import {
  Fragment,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import moment from 'moment';
import StompJs from 'stompjs';
import { v4 as createRandomKey } from 'uuid';

import Chat from '@components/Chat';
import * as S from '@components/ChatroomDetailContents/ChatroomDetailContents.style';
import { chatroomSocket } from '@socket/chatroomSocket';
import { ChatroomDetailChatsType, ChatroomDetailChatType } from '@type/chat';

type ChatroomDetailContentsPropsType = {
  chats: ChatroomDetailChatsType;
  chatroomId: string;
};

const ChatroomDetailContents = ({ chats, chatroomId }: ChatroomDetailContentsPropsType) => {
  const [curChats, setCurChats] = useState(chats);
  const dateRef = useRef('');
  const lastChatRef = useRef<HTMLDivElement>();
  //**callback ref for scroll to bottom */
  const scrollToBottomRef = useCallback((lastChatDiv: HTMLDivElement) => {
    if (!lastChatDiv) return;
    // change target only if last chat didn't exist
    lastChatRef.current = lastChatDiv;
    lastChatDiv.scrollIntoView();
  }, []);

  const scrollToBottom = () => {
    lastChatRef.current?.scrollIntoView({ block: 'end' });
  };

  const getSingleChat = (info: ChatroomDetailChatType) => {
    const { writtenDateTime } = info;
    const curDate = writtenDateTime.split(' ')[0];
    const isSameDate = curDate === dateRef.current;
    if (isSameDate) {
      return <Chat {...info} key={createRandomKey()} />;
    } else {
      dateRef.current = curDate;
      const showedDate = moment(curDate).format('YYYY년 MM월 DD일');
      return (
        <Fragment key={createRandomKey()}>
          <S.Date>{showedDate}</S.Date>
          <Chat {...info} />
        </Fragment>
      );
    }
  };

  const chatroomLogs = useMemo(() => {
    dateRef.current = '';
    return curChats.map(getSingleChat);
  }, [curChats]);

  const getNewChatMessage = (chatData: StompJs.Message) => {
    const newChat = JSON.parse(chatData.body);
    setCurChats((chats) => [...chats, newChat]);
    scrollToBottom();
  };

  useEffect(() => {
    const { disconnectChatroom, connectChatroom } = chatroomSocket();
    connectChatroom({ onReceive: getNewChatMessage, chatroomId });
    return () => disconnectChatroom();
  }, []);

  return (
    <S.Wrapper>
      {chatroomLogs}
      <S.LastBottomBlock ref={scrollToBottomRef} />
    </S.Wrapper>
  );
};

export default ChatroomDetailContents;
