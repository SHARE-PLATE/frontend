import { useEffect } from 'react';

import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import StompJs from 'stompjs';

import { chatroomSocket } from '@socket/chatroomSocket';
import { chatroomIdsState, chatroomsUpdateState, chatsUnreadTrigger } from '@store/chatrooms';

const useChatAlarm = () => {
  const { state, contents } = useRecoilValueLoadable(chatroomIdsState);
  const { connectChatroom } = chatroomSocket();
  const setChatsUnreadTrigger = useSetRecoilState(chatsUnreadTrigger);
  const setChatroomsUpdate = useSetRecoilState(chatroomsUpdateState);

  return () => {
    useEffect(() => {
      if (state !== 'hasValue' || !contents) return;
      const chatroomIds = contents.map(({ id }) => id);
      const onReceive = (chatDate: StompJs.Message) => {
        const { body, headers } = chatDate;
        const { contents } = JSON.parse(body);
        //@ts-ignore ** 추후에 반드시 처리가 필요합니다!
        const id = Number(headers.destination.split('/').at(-1));
        setChatsUnreadTrigger((prev) => prev + 1);
        setChatroomsUpdate({ contents, id });
      };
      connectChatroom({ chatroomIds, onReceive });
    }, [state]);
  };
};

export default useChatAlarm;
