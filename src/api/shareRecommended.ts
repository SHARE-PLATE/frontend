import axios from 'axios';

import { API } from '@constants/api';

export const getShareListRecommendedData = async (lat: number, lng: number) => {
  try {
    const response = await axios.get(`${API.SHARE_RECOMMENDED}`, {
      params: {
        latitude: lat,
        longitude: lng,
      },
    });
    console.log(response);

    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
