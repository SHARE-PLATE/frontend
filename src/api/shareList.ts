import axios, { AxiosError } from 'axios';

import { API } from '@constants/api';
import { DELIVERY, ENTRY, INGREDIENTS } from '@constants/words';
import { activeShareListType } from '@store/filterShareList';
import { LatitudeLongitudeType } from '@store/location';
import { ShareDetailType, ShareListType, ShareWriterType } from '@type/shareList';
import { getAuthHeaders } from '@utils/getAuthHeaders';

type MineType = 'entry' | 'writer' | 'wish';

export type GetShareListDataParamsType = {
  type?: activeShareListType;
  location: LatitudeLongitudeType;
  keyword?: string;
};

export type GetShareMineListDataParamsType = {
  mineType: MineType;
  shareType?: typeof DELIVERY | typeof INGREDIENTS;
  isExpired?: boolean;
};

export type GetShareListEntriesDataType = {
  idList: number[];
};

export const getShareListData = async ({ type, location, keyword }: GetShareListDataParamsType) => {
  const params = { type, latitude: location.lat, longitude: location.lng, keyword };

  try {
    const response = await axios.get<ShareListType[]>(API.SHARE_LIST, { params });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteShare = async ({ id }: { id: number }) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.delete(`${API.SHARE_LIST}/${id}`, { headers });
    return { isDeleted: response.status === 200 };
  } catch (error) {
    const { response } = error as AxiosError<{ message: string }>;
    return { isDeleted: false, message: response?.data.message };
  }
};

export const getShareDetailData = async ({ id }: { id: string }) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get<ShareDetailType>(API.SHARE_LIST + `/${id}`, { headers });
    return response.data;
  } catch (error) {
    const { response } = error as AxiosError<{ message: string }>;
    return response?.data.message;
  }
};

export const registrationShareListData = async (formData: any) => {
  const headers = getAuthHeaders();

  for (let key of formData.keys()) {
    if (!formData.get(key)) return false;
  }

  try {
    const response = await axios({
      method: 'post',
      url: `${API.SHARE_LIST}`,
      data: formData,
      headers: headers,
    });

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
    const response = await axios.get<ShareListType[]>(API.SHARE_MINE, {
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

export const getShareListEntries = async () => {
  try {
    const headers = getAuthHeaders();
    const response = await axios.get<GetShareListEntriesDataType>(API.ENTRIES, { headers });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postShareEntry = async ({ id }: { id: number }) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.post(`${API.SHARE_LIST}/${id}/${ENTRY}`, {}, { headers });
    const { status } = response;
    const isSuccess = status === 200;
    return isSuccess;
  } catch (error) {
    console.error(error);
  }
};

export const deleteShareEntry = async ({ id }: { id: number }) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.delete(`${API.SHARE_LIST}/${id}/${ENTRY}`, { headers });
    const { status } = response;
    const isSuccess = status === 200;
    return isSuccess;
  } catch (error) {
    console.error(error);
  }
};

export const getShareListWriterData = async ({ writerId }: { writerId: string }) => {
  try {
    const response = await axios.get<ShareWriterType>(API.SHARES_WRITER, { params: { writerId } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
