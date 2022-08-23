import axios, { AxiosError } from 'axios';
import { useSetRecoilState, useResetRecoilState } from 'recoil';

import { API } from '@constants/api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/words';
import { thumbnailImageUrl } from '@store/thumbnailImageUrl';
import {
  setLocalStorageInfo,
  getLocalStorageInfo,
  LocalStorageKeyType,
  removeLocalStorageInfo,
} from '@utils/localStorage';

export const getLoginPage = async () => {
  // window.location.href =
  //   'https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fd3ew6nkgwjgkva.cloudfront.net%252Flogin-callback%26through_account%3Dtrue%26client_id%3D5ef75caaf5c9d707dabc7f9c736c35b9';
  const response = await axios.get(API.LOGIN_FORM);
  return response;
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
  const removeUserInfo = () => {
    resetThumbnailImageUrl();
    removeLocalStorageInfo({ key: ACCESS_TOKEN });
    removeLocalStorageInfo({ key: REFRESH_TOKEN });
  };

  return async () => {
    const headers: any = {}; // headers 초기 설정 재정리 필요

    headers[ACCESS_TOKEN] = getLocalStorageInfo(ACCESS_TOKEN);
    headers[REFRESH_TOKEN] = getLocalStorageInfo(REFRESH_TOKEN);

    const response = await axios.post(API.LOGOUT, null, { headers });

    if (response.status === 200) removeUserInfo();
  };
};
