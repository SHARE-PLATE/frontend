import { useRecoilValue } from 'recoil';

import { TabsInfoType } from '@components/Tabs';
import { activeChatroomsState, ChatroomsStateType } from '@store/chatrooms';

const useChatroomsInfo = () => {
  const activeChatrooms = useRecoilValue(activeChatroomsState);
  const chatroomsInfo: TabsInfoType<ChatroomsStateType> = [
    {
      title: '쉐어채팅',
      value: 'entry',
      active: activeChatrooms === 'entry',
    },
    {
      title: '문의채팅',
      value: 'question',
      active: activeChatrooms === 'question',
    },
  ];

  return chatroomsInfo;
};

export default useChatroomsInfo;
