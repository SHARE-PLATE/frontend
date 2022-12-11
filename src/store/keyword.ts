import { atom, selector, selectorFamily } from 'recoil';
import { v4 as createRandomKey } from 'uuid';

import { getKeywordListData, getRegisteredKeywords } from '@api/keyword';

import { socketConnectTrigger } from './socket';

export const keywordListTrigger = atom<number>({
  key: `keywordListTrigger/${createRandomKey()}`,
  default: 0,
});

export const registeredKeywordTrigger = atom<number>({
  key: `registeredKeywordTrigger/${createRandomKey()}`,
  default: 0,
});

export const registeredKeywordLength = atom<{ [key: string]: number }>({
  key: `registeredKeywordLength/${createRandomKey()}`,
  default: {},
});

export const getKeywordListsData = selector({
  key: `GET/getKeywordListsData/${createRandomKey()}`,
  get: async ({ get }) => {
    get(keywordListTrigger);
    get(socketConnectTrigger);
    const keywordListData = await getKeywordListData();
    return keywordListData;
  },
});

export const getRegisteredKeywordData = selectorFamily({
  key: `GET/getRegisteredKeywordData/${createRandomKey()}`,
  get:
    (regionName: string) =>
    async ({ get }) => {
      get(registeredKeywordTrigger);
      const registeredKeywordListData = await getRegisteredKeywords(regionName);
      return registeredKeywordListData;
    },
});
