import { atom } from 'recoil';

import { SEARCH_RECENT } from '@constants/words';
import { getLocalStorageInfo } from '@utils/localStorage';

import { ADDRESS_RECENT } from './../constants/words';

export type AddressLocalStorageType = {
  id: string;
  lat: string | number;
  lng: string | number;
  place_name: string;
  road_address_name?: string;
  address_name?: string;
};

export type SearchRecentType = {
  name: string;
  date: string;
};

const getIsInfoRight = (info: any) => {
  if (!Array.isArray(info)) return false;
  if (new Map(info).has(undefined)) return false;

  return true;
};

const searchRecentListInfo = getLocalStorageInfo(SEARCH_RECENT) || [];
const addressRecentInfo = getLocalStorageInfo(ADDRESS_RECENT) || [];
const addressSelectedInfo = getLocalStorageInfo(ADDRESS_RECENT) || [];

const isSearchRecentListInfo = getIsInfoRight(searchRecentListInfo);
const isAddressRecentInfo = getIsInfoRight(addressRecentInfo);
const isAddressSearchInfo = getIsInfoRight(addressSelectedInfo);

export const searchRecent = atom<Map<string, SearchRecentType>>({
  key: 'searchRecent',
  default: new Map(isSearchRecentListInfo ? searchRecentListInfo : []),
});

export const addressRecentState = atom<Map<string, AddressLocalStorageType>>({
  key: 'addressRecent',
  default: new Map(isAddressRecentInfo ? addressRecentInfo : []),
});

export const addressSelectedState = atom<Map<string, AddressLocalStorageType>>({
  key: 'addressSelected',
  default: new Map(isAddressSearchInfo ? addressSelectedInfo : []),
});

export const currentMapKey = atom({
  key: 'currentMapKey',
  default: '',
});
