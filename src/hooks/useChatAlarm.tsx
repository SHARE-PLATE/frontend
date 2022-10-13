import { useEffect } from 'react';

import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { chatroomSocket } from '@socket/chatroomSocket';
import { chatroomIdsState, chatsUnreadTrigger } from '@store/chatrooms';

const useChatAlarm = () => {
  const { state, contents } = useRecoilValueLoadable(chatroomIdsState);
  const { connectChatroom } = chatroomSocket();
  const getNewChatsUnread = useSetRecoilState(chatsUnreadTrigger);

  return () => {
    useEffect(() => {
      if (state !== 'hasValue' || !contents) return;
      const chatroomIds = contents.map(({ id }) => id);
      const onSet = () => getNewChatsUnread((prev) => prev + 1);
      connectChatroom({ chatroomIds, onSet });
    }, [state]);
  };
};

export default useChatAlarm;
