import { atom, selector } from 'recoil';

import { getChattingDetailData } from '@api/chattingDetail';

export const chattingDetailTrigger = atom<number>({
  key: 'chattingDetailTrigger',
  default: 0,
});

export const getChattingDetailsData = (id: string) =>
  selector({
    key: 'GET/chattingDetailsData',
    get: async ({ get }) => {
      get(chattingDetailTrigger);
      const chattingDetailData = await getChattingDetailData(id);
      return chattingDetailData;
    },
  });
