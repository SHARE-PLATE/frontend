import axios from 'axios';

import { API } from '@constants/api';
import { activeShareListType } from '@store/filterShareList';
import { currentLatitudeLongitudeType } from '@store/location';

export const getShareListData = async (
  type: activeShareListType,
  location: currentLatitudeLongitudeType,
) => {
  const curType = type.delivery ? 'delivery' : type.ingredient ? 'ingredient' : '';
  try {
    const response = await axios.get(`${API.SHARE_LIST}`, {
      params: {
        type: curType,
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
