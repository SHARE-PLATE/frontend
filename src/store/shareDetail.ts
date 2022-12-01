import { atom, selectorFamily } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getShareDetailData } from '@api/shareList';

export const shareDetailTrigger = atom<number>({
  key: `shareListTrigger/${getRandomKey()}`,
  default: 0,
});

export const shareDetailState = selectorFamily({
  key: `GET/ShareDetailData/${getRandomKey()}`,
  get:
    ({ id }: { id: string }) =>
    async ({ get }) => {
      get(shareDetailTrigger);
      const shareDetailData = await getShareDetailData({ id });
      return shareDetailData;
    },
});

export const isEntryState = atom<boolean | null>({
  key: 'isEntry',
  default: null,
});

export const isWishedState = atom<boolean | null>({
  key: 'isWished',
  default: null,
});
