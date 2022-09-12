import axios from 'axios';

import { API } from '@constants/api';
import { CHATROOM_ID } from '@constants/words';
import { getAuthHeaders } from '@utils/getAuthHeaders';

type GetChatroomsDataPramsType = {
  id?: string;
  type?: 'entry' | 'question';
};

export const getChatroomsData = async ({ id, type }: GetChatroomsDataPramsType) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get(`${API.CHATROOMS}/${id || ''}`, {
      headers,
      params: {
        type,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteChatroomData = async (id: string) => {
  const data = JSON.stringify({ [CHATROOM_ID]: id });
  const headers: any = getAuthHeaders();

  headers['Content-Type'] = 'application/json';

  try {
    const response = axios.delete(API.CHATROOM_MEMBERS, { headers, data });

    return response;
  } catch (error) {
    throw error;
  }
};
