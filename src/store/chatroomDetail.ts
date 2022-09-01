import { atom, selector } from 'recoil';

import { getChatroomsData } from '@api/chat';

export const chatroomDetailTrigger = atom<number>({
  key: 'chatroomDetailTrigger',
  default: 0,
});

export const getChatroomDetail = (id: string) =>
  selector({
    key: `GET/chatroomDetailsData/${id}`,
    get: async ({ get }) => {
      get(chatroomDetailTrigger);
      const chatroomDetailData = await getChatroomsData(id);
      return chatroomDetailData;
    },
  });
