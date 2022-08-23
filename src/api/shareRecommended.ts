import axios from 'axios';

import { API } from '@constants/api';

export const getShareListRecommendedData = async (lat: number, lng: number) => {
  try {
    const response = await axios.get(`http://louie-03.com/shares/recommendation`, {
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
