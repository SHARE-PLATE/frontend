import axios from 'axios';

import { API } from '@constants/api';
import {
  ActiveNoticeType,
  DeleteNoticeParamsType,
  GetNoticeDataType,
  GetNoticeParamsType,
} from '@type/notice';
import { getAuthHeaders } from '@utils/getAuthHeaders';

export const noticeApiByType = {
  activity: API.NOTICE_ACTIVITY,
  keyword: API.NOTICE_KEYWORD,
};

export const getNotice = async <T extends ActiveNoticeType>({ type }: GetNoticeParamsType) => {
  const headers = getAuthHeaders();
  const api = noticeApiByType[type];

  try {
    const response = await axios.get<GetNoticeDataType<T>>(api, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteNotice = async ({ id, idList }: DeleteNoticeParamsType) => {
  const headers = getAuthHeaders();
  const api = API.NOTICE + (id ? `/${id}` : '');
  const data = idList && JSON.stringify({ idList });
  console.log({ data });

  try {
    const response = await axios.delete(api, { headers, data });
    return response;
  } catch (error) {
    console.error(error);
  }
};
