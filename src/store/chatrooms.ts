import { atom, selector } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getChatroomsData } from '@api/chat';
import { ChatroomsStateType } from '@type/chat';

export const chatroomsTrigger = atom({
  key: 'chatroomsTrigger',
  default: 0,
});

export const activeChatroomsState = atom<ChatroomsStateType>({
  key: 'activeChatrooms',
  default: 'entry',
});

export const chatroomsState = selector({
  key: `GET/chatroomsState/${getRandomKey()}`,
  get: async ({ get }) => {
    get(chatroomsTrigger);
    const type = get(activeChatroomsState);
    const chatroomDetailData = await getChatroomsData({ type });

    return chatroomDetailData;
  },
});
