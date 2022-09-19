import axios from 'axios';

import { API } from '@constants/api';
import { activeShareListType } from '@store/filterShareList';
import { CurrentLatitudeLongitudeType } from '@store/location';
import { getAuthHeaders } from '@utils/getAuthHeaders';

export const getShareListData = async (
  type: activeShareListType,
  location: CurrentLatitudeLongitudeType,
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
  const headers = getAuthHeaders();

  for (let key of formData.keys()) {
    if (!formData.get(key)) return false;
  }

  try {
    const response = await axios({
      method: 'post',
      url: `${API.SHARE_REGISTRATION}`,
      data: formData,
      headers: headers,
    });

    if (response.status === 200) return true;
    else throw Error('잘못된 요청입니다.');
  } catch (error) {
    throw error;
  }
};
