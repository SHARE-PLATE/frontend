import { atom, selectorFamily } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getChatroomsData, GetChatroomsDataParamsType } from '@api/chat';

export const chatroomDetailTrigger = atom<number>({
  key: 'chatroomDetailTrigger',
  default: 0,
});

export const chatroomDetailState = selectorFamily({
  key: `GET/chatroomDetailsData/${getRandomKey()}`,
  get:
    ({ id }: GetChatroomsDataParamsType) =>
    async ({ get }) => {
      get(chatroomDetailTrigger);
      const chatroomDetailData = await getChatroomsData({ id });
      return chatroomDetailData;
    },
});
