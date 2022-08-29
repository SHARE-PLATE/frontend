import { atom, selector } from 'recoil';

import { getChatroomsData } from '@api/chat';

export const chatroomsDetailTrigger = atom<number>({
  key: 'chatroomsDetailTrigger',
  default: 0,
});

export const getChatroomsDetail = (id: string) =>
  selector({
    key: `GET/chattingDetailsData/${id}`,
    get: async ({ get }) => {
      get(chatroomsDetailTrigger);
      const chattingDetailData = await getChatroomsData(id);
      return chattingDetailData;
    },
  });
