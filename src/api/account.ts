import axios, { AxiosError } from 'axios';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

import { API } from '@constants/api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/words';
import { isLoginTriggerState, thumbnailImageUrl } from '@store/user';
import { getAuthHeaders } from '@utils/getAuthHeaders';
import getTokenHeaders from '@utils/getTokenHeaders';
import {
  setLocalStorageInfo,
  LocalStorageKeyType,
  removeLocalStorageInfo,
} from '@utils/localStorage';

export type UserInfoDataType = {
  profileImageUrl?: string;
  nickname?: string;
  email?: string;
};

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
  const setIsLoginTrigger = useSetRecoilState(isLoginTriggerState);

  const headers = getTokenHeaders();

  const removeUserInfo = () => {
    removeLocalStorageInfo({ key: ACCESS_TOKEN });
    removeLocalStorageInfo({ key: REFRESH_TOKEN });
    resetThumbnailImageUrl();
    setIsLoginTrigger((prev) => prev + 1);
  };

  return async () => {
    const response = await axios.post(API.LOGOUT, null, { headers });
    if (response.status === 200) {
      removeUserInfo();
      return true;
    } else {
      return false;
    }
  };
};

export const getBackAccessToken = async () => {
  const headers = getTokenHeaders();

  try {
    const response = await axios.get(API.CHECK_LOGIN, { headers });
    const { headers: responseHeaders } = response;
    setLocalStorageInfo({ key: ACCESS_TOKEN, info: responseHeaders[ACCESS_TOKEN] });
    return true;
  } catch (error) {
    console.error(error);
  }
};

export const getUserInfoData = async () => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get<UserInfoDataType>(API.MEMBERS, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const editUserInfoData = async (formData: FormData) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.patch(API.MEMBERS, formData, { headers });
    const isSuccess = response.status === 200;
    return isSuccess;
  } catch (error) {
    throw error;
  }
};

export const checkVerification = async () => {
  const headers = getTokenHeaders();

  try {
    const response = await axios.get(API.LOGIN_VERIFICATION, { headers });
    return response.status === 200;
  } catch (error) {
    console.error(error);
  }
};
