import axios from 'axios';

import { API } from '@constants/api';
import { ACTIVITY, KEYWORD } from '@constants/words';
import { getAuthHeaders } from '@utils/getAuthHeaders';

export type ActiveNoticeType = typeof ACTIVITY | typeof KEYWORD;

export type GetNoticeParamsType = {
  type: ActiveNoticeType;
};

export type DeleteNoticeParamsType = {
  id?: number;
  idList?: number[];
};

export type NoticeActivityDataType = {
  recruitmentMemberNickname: string | null;
  notificationCreatedDateTime: string;
  shareTitle: string;
  shareThumbnailImageUrl: string;
  shareId: number;
  activityType: 'ENTRY' | 'DEADLINE';
};

export type NoticeKeywordDataType = {
  shareLocation: string;
  shareId: number;
  shareTitle: string;
  shareThumbnailImageUrl: string;
  notificationCreatedDateTime: string;
};

export type GetNoticeDataType<T extends ActiveNoticeType> = T extends typeof ACTIVITY
  ? NoticeActivityDataType[]
  : NoticeKeywordDataType[];

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
