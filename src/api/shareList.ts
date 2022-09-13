import axios from 'axios';

import { API } from '@constants/api';
import { DELIVERY, INGREDIENTS } from '@constants/words';
import { activeShareListType } from '@store/filterShareList';
import { CurrentLatitudeLongitudeType } from '@store/location';
import { getAuthHeaders } from '@utils/getAuthHeaders';

type MineType = 'entry' | 'writer' | 'wish';

export type GetShareMineListDataParamsType = {
  mineType: MineType;
  shareType?: typeof DELIVERY | typeof INGREDIENTS;
  isExpired?: boolean;
};

export type GetShareMineListDataType = {
  id: number;
  thumbnailUrl: string;
  title: string;
  location: string;
  price: number;
  originalPrice: number;
  currentRecruitment: number;
  finalRecruitment: number;
  recruitmentLimit: boolean;
  createdDateTime: string;
  closedDateTime: string;
};

export const getShareListData = async (
  type: activeShareListType,
  location: CurrentLatitudeLongitudeType,
) => {
  try {
    const response = await axios.get(`${API.SHARE_LIST}`, {
      params: {
        type,
        latitude: location.lat,
        longitude: location.lng,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const registrationShareListData = async (formData: any) => {
  const accessToken = localStorage.getItem('accessToken')!;
  try {
    const response = await axios.post(
      `${API.SHARE_REGISTRATION}`,
      { formData },
      {
        headers: {
          Authorization: `${JSON.parse(accessToken)}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status === 200) return true;
    else throw Error('잘못된 요청입니다.');
  } catch (error) {
    throw error;
  }
};

export const getShareMineListData = async ({
  isExpired,
  shareType,
  mineType,
}: GetShareMineListDataParamsType) => {
  try {
    const headers = getAuthHeaders();
    const response = await axios.get<GetShareMineListDataType[]>(`${API.SHARE_MINE}`, {
      params: {
        mineType,
        shareType,
        isExpired,
      },
      headers,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
