import axios, { AxiosError } from 'axios';

import { API } from '@constants/api';
import { ACCESS_TOKEN, AUTHORIZATION, SHARE_ID } from '@constants/words';
import { getLocalStorageInfo } from '@utils/localStorage';

export type ChangeWishOptionType = 'enroll' | 'cancel';

type ChangeWishParamsType = {
  option: ChangeWishOptionType;
  id?: number;
};

export const changeWish = async ({ id, option }: ChangeWishParamsType) => {
  if (!id) return;

  const data = JSON.stringify({ [SHARE_ID]: id });
  const headers: any = { 'Content-Type': 'application/json' };

  headers[AUTHORIZATION] = getLocalStorageInfo(ACCESS_TOKEN);

  if (option === 'enroll') {
    const response = await axios
      .post(API.WISH_LIST, data, { headers })
      .then(() => ({ isSuccess: true, message: '성공' }))
      .catch((error) => {
        const { response } = error as AxiosError<{ message: string; errorCode: string }>;
        if (!response) return { isSuccess: false, message: '에러가 발생했습니다.' };
        return { isSuccess: false, ...response.data };
      });

    return response;
  }

  if (option === 'cancel') {
    const response = await axios
      .delete(API.WISH_LIST, { headers, data })
      .then(() => ({ isSuccess: true, message: '성공' }))
      .catch((error) => {
        const { response } = error as AxiosError<{ message: string; errorCode: string }>;
        if (!response) return { isSuccess: false, message: '에러가 발생했습니다.' };
        return { isSuccess: false, ...response.data };
      });

    return response;
  }
};
