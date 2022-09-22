import { atom, selectorFamily } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getChatroomsData } from '@api/chat';

export type chatroomType = {
  id: string;
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

export const chatroomsState = selectorFamily<chatroomType[], ChatroomsStateType>({
  key: `GET/chatroomsState/${getRandomKey()}`,
  get:
    (type: ChatroomsStateType) =>
    async ({ get }) => {
      get(chatroomsTrigger);

      const chatroomDetailData = await getChatroomsData({ type });

      return chatroomDetailData;
    },
});
