import axios from 'axios';

import { API } from '@constants/api';

export const getChattingDetailData = async (id: string) => {
  try {
    const response = await axios.get(`${API.CHATTING_DETAIL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
