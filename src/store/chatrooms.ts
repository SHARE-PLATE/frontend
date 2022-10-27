import { atom, selector } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getChatroomIds, getChatroomsData, getChatsUnread } from '@api/chat';
import { ChatroomIdsType, ChatroomsStateType, ChatroomsUpdate } from '@type/chat';

const maximalChatCount = 999;

export const activeChatroomsState = atom<ChatroomsStateType>({
  key: 'activeChatrooms',
  default: 'entry',
});

export const chatroomsTrigger = atom({
  key: 'chatroomsTrigger',
  default: 0,
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

export const chatsUnreadTrigger = atom({
  key: 'chatsUnreadTrigger',
  default: 0,
});

export const chatsUnreadState = selector<number | null>({
  key: 'GET/chats/unread',
  get: async ({ get }) => {
    get(chatsUnreadTrigger);
    const response = await getChatsUnread();

    if (!response) return null;
    if (response.count > maximalChatCount) return maximalChatCount;

    return response.count;
  },
});

export const chatroomIdsTrigger = atom({
  key: 'chatroomIdsTrigger',
  default: 0,
});

export const chatroomIdsState = selector<ChatroomIdsType | undefined>({
  key: 'GET/chatroomIds',
  get: async ({ get }) => {
    get(chatroomIdsTrigger);
    const data = await getChatroomIds();
    return data;
  },
});

export const chatUpdateState = atom<ChatroomsUpdate>({
  key: 'chatUpdate',
  default: { trigger: 0 },
});
