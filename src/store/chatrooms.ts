import { atom, selector } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getChatroomsData } from '@api/chat';

export type chatroomType = {
  id: string;
  chatRoomMemberId: number;
  shareThumbnailImageUrl: string;
  currentRecruitment: number;
  recentMessage: string;
  recentMessageDataTime: string;
  recruitmentMemberNicknames: string[];
  recruitmentMemberImageUrls: string[];
  unreadCount: number;
};

export type ChatroomsStateType = 'entry' | 'question';

export const chatroomsTrigger = atom({
  key: 'chatroomsTrigger',
  default: 0,
});

export const activeChatroomsState = atom<ChatroomsStateType>({
  key: 'activeChatrooms',
  default: 'entry',
});

export const chatroomsState = selector<chatroomType[]>({
  key: `GET/chatroomsState/${getRandomKey()}`,
  get: async ({ get }) => {
    get(chatroomsTrigger);
    const type = get(activeChatroomsState);
    const chatroomDetailData = await getChatroomsData({ type });

    return chatroomDetailData;
  },
});
