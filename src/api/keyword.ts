import axios from 'axios';

import { API } from '@constants/api';
import { newKeywordType } from '@type/keyword';
import { getAuthHeaders } from '@utils/getAuthHeaders';

export const getKeywordListData = async () => {
  const headers = getAuthHeaders();
  try {
    const response = await axios.get(`${API.KEYWORD}`, {
      headers,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const addKeywords = async (newKeyword: newKeywordType) => {
  const headers = getAuthHeaders();
  try {
    const response = await axios.post(
      `${API.ADD_KEYWORD}`,
      { ...newKeyword },
      {
        headers,
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteKeywordAddress = async (curLocation: string) => {
  const headers = getAuthHeaders();
  const data = { location: curLocation };

  try {
    const response = await axios.delete(`${API.DELETE_KEYWORD}`, {
      headers,
      data,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRegisteredKeywords = async (regionName: string) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get(`${API.REGISTERED_KEYWORDS}`, {
      headers,
      params: { location: regionName },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
