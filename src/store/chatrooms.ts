import { atom, selector } from 'recoil';

import { getChatroomsData } from '@api/chat';

export type chatroomType = {
  id: number;
  shareThumbnailImageUrl: string;
  currentRecruitment: number;
  recentMessage: string;
  recentMessageDataTime: string;
  recruitmentMemberNicknames: string[];
  recruitmentMemberImageUrls: string[];
  unreadCount: number;
};

export const chatroomsTrigger = atom<chatroomType[]>({
  key: 'chatroomsTrigger',
  default: [],
});

export const chatroomsState = selector<chatroomType[]>({
  key: 'GET/chatroomsState',
  get: async ({ get }) => {
    get(chatroomsTrigger);

    const chatroomDetailData = await getChatroomsData();

    return chatroomDetailData;
  },
});
