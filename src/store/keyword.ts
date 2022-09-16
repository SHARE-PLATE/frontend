import { atom, selector, selectorFamily } from 'recoil';
import { v1 } from 'uuid';

import { getKeywordListData, getRegisteredKeywords } from '@api/keyword';

export const keywordListTrigger = atom<number>({
  key: `keywordListTrigger/${v1()}`,
  default: 0,
});

export const registeredKeywordTrigger = atom<number>({
  key: `registeredKeywordTrigger/${v1()}`,
  default: 0,
});

export const getKeywordListsData = selector({
  key: `GET/getKeywordListsData/${v1()}`,
  get: async ({ get }) => {
    get(keywordListTrigger);
    const keywordListData = await getKeywordListData();
    return keywordListData;
  },
});

export const getRegisteredKeywordData = selectorFamily({
  key: `GET/getRegisteredKeywordData/${v1()}`,
  get:
    (regionName: string) =>
    async ({ get }) => {
      get(registeredKeywordTrigger);
      const registeredKeywordListData = await getRegisteredKeywords(regionName);
      return registeredKeywordListData;
    },
});
