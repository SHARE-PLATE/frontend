import axios from 'axios';

import { API } from '@constants/api';
import { AUTHORIZATION, ACCESS_TOKEN } from '@constants/words';
import { getLocalStorageInfo } from '@utils/localStorage';

export const getChatroomsData = async (id?: string) => {
  const headers = { [AUTHORIZATION]: getLocalStorageInfo(ACCESS_TOKEN) };

  try {
    const response = await axios.get(`${API.CHATTING_ROOMS}/${id || ''}`, { headers });

    return response.data;
  } catch (error) {
    throw error;
  }
};
