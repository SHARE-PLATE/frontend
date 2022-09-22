import axios, { AxiosError } from 'axios';
import { useSetRecoilState, useResetRecoilState } from 'recoil';

import { API } from '@constants/api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/words';
import { thumbnailImageUrl } from '@store/thumbnailImageUrl';
import { getAuthHeaders } from '@utils/getAuthHeaders';
import {
  setLocalStorageInfo,
  getLocalStorageInfo,
  LocalStorageKeyType,
  removeLocalStorageInfo,
} from '@utils/localStorage';

export const getLoginPage = async () => {
  window.location.href = process.env.REACT_APP_BASE_URL + API.LOGIN_FORM;
};

export const useLogin = (code: string | null) => {
  const setThumbnailImageInfo = useSetRecoilState(thumbnailImageUrl);

  return async () => {
    const response = await axios.post(API.LOGIN, { code }).catch((error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error.message;
      }
    });

    if (typeof response === 'string') {
      // when error occurs
      return false;
    } else {
      const { data, headers } = response;
      const localStorageData: { key: LocalStorageKeyType; info: string }[] = [
        { key: ACCESS_TOKEN, info: headers[ACCESS_TOKEN] },
        { key: REFRESH_TOKEN, info: headers[REFRESH_TOKEN] },
      ];

      setThumbnailImageInfo(data.thumbnailImageUrl);
      localStorageData.forEach((data) => setLocalStorageInfo(data));

      return true;
    }
  };
};

export const useLogout = () => {
  const resetThumbnailImageUrl = useResetRecoilState(thumbnailImageUrl);
  const headers: any = {}; // headers 초기 설정 재정리 필요

  headers[ACCESS_TOKEN] = getLocalStorageInfo(ACCESS_TOKEN);
  headers[REFRESH_TOKEN] = getLocalStorageInfo(REFRESH_TOKEN);

  const removeUserInfo = () => {
    resetThumbnailImageUrl();
    removeLocalStorageInfo({ key: ACCESS_TOKEN });
    removeLocalStorageInfo({ key: REFRESH_TOKEN });
  };

  return async () => {
    const response = await axios.post(API.LOGOUT, null, { headers });
    if (response.status === 200) removeUserInfo();
  };
};

export const useCheckLogin = () => {
  const headers: any = {};

  headers[ACCESS_TOKEN] = getLocalStorageInfo(ACCESS_TOKEN);
  headers[REFRESH_TOKEN] = getLocalStorageInfo(REFRESH_TOKEN);

  return async () => {
    const response = await axios.get(API.CHECK_LOGIN, { headers }).catch((err) => err.message);

    if (typeof response === 'string') {
      // when error occurs
      return false;
    } else {
      const { headers } = response;
      setLocalStorageInfo({ key: ACCESS_TOKEN, info: headers[ACCESS_TOKEN] });
      return true;
    }
  };
};

export type UserInfoDataType = {
  profileImageUrl?: string;
  nickname?: string;
  email?: string;
};

export const getUserInfoData = async () => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get<UserInfoDataType>(API.MEMBERS, { headers });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
