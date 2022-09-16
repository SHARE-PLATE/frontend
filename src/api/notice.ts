import axios from 'axios';

import { API } from '@constants/api';
import { ACTIVITY, KEYWORD } from '@constants/words';
import { getAuthHeaders } from '@utils/getAuthHeaders';

export type ActiveNoticetype = typeof ACTIVITY | typeof KEYWORD;

export type GetNoticeParamsType = {
  type: ActiveNoticetype;
};

export type NoticeActivityDataType = {
  recruitmentMemberNickname: string | null;
  notificationCreatedDateTime: string;
  shareTitle: string;
  shareThumbnailImageUrl: string;
  shareId: number;
  activityType: 'ENTRY' | 'DEADLINE';
}[];

export type NoticeKeywordDataType = {
  shareLocation: string;
  shareId: number;
  shareTitle: string;
  shareThumbnailImageUrl: string;
  notificationCreatedDateTime: string;
}[];

export type GetNoticeDataType<T extends ActiveNoticetype> = T extends typeof ACTIVITY
  ? NoticeActivityDataType
  : NoticeKeywordDataType;

export const noticeApiByType = {
  activity: API.NOTICE_ACTIVITY,
  keyword: API.NOTICE_KEYWORD,
};

export const getNoticeActivity = async () => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get(API.NOTICE_ACTIVITY, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getNoticeKeyword = async () => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get(API.NOTICE_KEYWORD, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
