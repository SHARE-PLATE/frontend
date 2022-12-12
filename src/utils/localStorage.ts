import {
  ACCESS_TOKEN,
  ADDRESS_RECENT,
  ADDRESS_SELECTED,
  REFRESH_TOKEN,
  SEARCH_RECENT,
} from '@constants/words';
import { getParseResult, ParseGuardType } from '@utils/getParseResult';

export type LocalStorageKeyType =
  | typeof SEARCH_RECENT
  | typeof ACCESS_TOKEN
  | typeof REFRESH_TOKEN
  | typeof ADDRESS_SELECTED
  | typeof ADDRESS_RECENT;

export const getLocalStorageInfo = (key: LocalStorageKeyType) => {
  const data = window.localStorage.getItem(key);
  try {
    const info = data && JSON.parse(data);
    return info;
  } catch (error) {
    console.error(error);
  }
};

export const setLocalStorageInfo = ({ key, info }: { key: LocalStorageKeyType; info?: any }) => {
  window.localStorage.setItem(key, JSON.stringify(info));
};

export const removeLocalStorageInfo = ({ key }: { key: LocalStorageKeyType }) => {
  window.localStorage.removeItem(key);
};

export const getLocalStorageInfoTest =
  <T>(parseGuard: ParseGuardType) =>
  ({ key }: { key: LocalStorageKeyType }) => {
    const data = window.localStorage.getItem(key);

    try {
      const info = data && getParseResult<T>(parseGuard)(data);
      if (info && info.isSuccess) return info.parsedValue;
    } catch (error) {
      console.error(error);
    }

    return null;
  };
