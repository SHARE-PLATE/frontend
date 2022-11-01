import { useRecoilValue } from 'recoil';

import { TabsInfoType } from '@components/Tabs';
import { activeChatroomsState } from '@store/chatrooms';
import { ChatroomsStateType } from '@type/chat';

const useChatroomsInfo = () => {
  const activeChatrooms = useRecoilValue(activeChatroomsState);
  const chatroomsInfo: TabsInfoType<ChatroomsStateType> = [
    {
      title: '문의채팅',
      value: 'question',
      active: activeChatrooms === 'question',
    },
    {
      title: '쉐어채팅',
      value: 'entry',
      active: activeChatrooms === 'entry',
    },
  ];

  return chatroomsInfo;
};

export default useChatroomsInfo;
