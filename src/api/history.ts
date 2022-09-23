import axios from 'axios';

import { API } from '@constants/api';
import { getAuthHeaders } from '@utils/getAuthHeaders';

export const getHistoryData = async (
  currentType: any,
  curShareType: any,
  curShareFilterList: any,
) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get(`${API.MY_SHARE}`, {
      headers,
      params: {
        mineType: currentType.mineType,
        shareType: curShareType,
        isExpired: curShareFilterList,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
