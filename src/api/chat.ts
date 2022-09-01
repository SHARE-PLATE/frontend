import axios from 'axios';

import { API } from '@constants/api';
import { getAuthHeaders } from '@utils/getAuthHeaders';

import { CHATROOM_ID } from './../constants/words';

export const getChatroomsData = async (id?: string) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get(`${API.CHATROOMS}/${id || ''}`, { headers });

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
