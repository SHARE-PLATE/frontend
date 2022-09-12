import { atom, selector } from 'recoil';

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

export const chatroomsTrigger = atom({
  key: 'chatroomsTrigger',
  default: 0,
});

export const chatroomsState = selector<chatroomType[]>({
  key: 'GET/chatroomsState',
  get: async ({ get }) => {
    get(chatroomsTrigger);

    const chatroomDetailData = await getChatroomsData({ type: 'entry' });

    return chatroomDetailData;
  },
});
