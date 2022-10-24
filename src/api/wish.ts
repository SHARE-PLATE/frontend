import axios from 'axios';

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
    const response = await axios.post(API.WISH_LIST, data, { headers }).catch((error) => error);

    return response;
  }

  if (option === 'cancel') {
    const response = await axios.delete(API.WISH_LIST, { headers, data }).catch((error) => error);

    return response;
  }
};
