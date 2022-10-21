import { useEffect } from 'react';

import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import StompJs from 'stompjs';

import { chatroomIdsState, chatUpdateState, chatsUnreadTrigger } from '@store/chatrooms';
import { getKeywordListsData } from '@store/keyword';
import { newNoticeState } from '@store/notice';
import { shareListEntriesState } from '@store/shareList';

import { connectStomp } from './stomp';

export const useOnReceiveChat = () => {
  const setChatsUnreadTrigger = useSetRecoilState(chatsUnreadTrigger);
  const setChatUpdate = useSetRecoilState(chatUpdateState);

  return (chatDate: StompJs.Message) => {
    const { body, headers } = chatDate;
    const chat = JSON.parse(body);
    //@ts-ignore ** 추후에 반드시 처리가 필요합니다!
    const id = Number(headers.destination.split('/').at(-1));
    setChatsUnreadTrigger((prev) => prev + 1);
    setChatUpdate(({ trigger }) => ({ chat, id, trigger: trigger + 1 }));
  };
};

export const useOnReceiveNotice = () => {
  const setNewNotice = useSetRecoilState(newNoticeState);

  return (noticeData: StompJs.Message) => {
    const newEntryData = JSON.parse(noticeData.body);
    setNewNotice(newEntryData);
  };
};

const useConnectSocket = () => {
  const { state: entriesState, contents: entriesContents } =
    useRecoilValueLoadable(shareListEntriesState);
  const { state: keywordsState, contents: keywordsContents } =
    useRecoilValueLoadable(getKeywordListsData);
  const { state: chatroomState, contents: chatroomContents } =
    useRecoilValueLoadable(chatroomIdsState);

  const onSubscribeNotice = useOnReceiveNotice();
  const onReceiveChat = useOnReceiveChat();

  return () => {
    useEffect(() => {
      if (
        entriesState !== 'hasValue' ||
        keywordsState !== 'hasValue' ||
        chatroomState !== 'hasValue' ||
        !entriesContents ||
        !keywordsContents ||
        !chatroomContents
      )
        return;

      const entryIds = entriesContents.idList;
      const keywordIds = keywordsContents
        .map(({ keywords }) => keywords.map(({ id }) => id))
        .flat();
      const chatroomIds = chatroomContents.map(({ id }) => id);

      connectStomp({
        noticeParams: {
          entryIds,
          keywordIds,
          onSubscribeEntries: onSubscribeNotice,
          onSubscribeKeywords: onSubscribeNotice,
        },
        chatParams: { chatroomIds, onReceiveChat },
      });
    }, [entriesState, keywordsState, chatroomState]);
  };
};

export default useConnectSocket;
