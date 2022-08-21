import axios from 'axios';

import { API } from '@constants/api';
import { TestChattingDetailDataType } from '@pages/ChattingDetail/chattingDetailData';

export const getChattingDetailData = async (id: string) => {
  try {
    const response = await axios.get<TestChattingDetailDataType>(`${API.CHATTING_DETAIL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
