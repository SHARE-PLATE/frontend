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
