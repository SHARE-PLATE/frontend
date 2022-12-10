import { useSetRecoilState } from 'recoil';
import StompJs from 'stompjs';

import { chatUpdateState, chatsUnreadTrigger } from '@store/chatrooms';

export const useUpdateChat = () => {
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
