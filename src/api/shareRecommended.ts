import axios from 'axios';

import { API } from '@constants/api';

export const getShareListRecommendedData = async (lat: string | number, lng: string | number) => {
  try {
    const response = await axios.get(`${API.SHARE_RECOMMENDED}`, {
      params: {
        latitude: lat,
        longitude: lng,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
