import axios from 'axios';

import { API } from '@constants/api';
import { unexpectedErrorOccursMention } from '@constants/mentions';
import { keywordDataType, newKeywordType } from '@type/keyword';
import { checkError, createClient } from '@utils/api';
import { getAuthHeaders } from '@utils/getAuthHeaders';

export const getKeywordListData = async () => {
  const headers = getAuthHeaders();
  const { client, result } = createClient<keywordDataType[]>({ address: 'KEYWORD' });

  try {
    const { data } = await client.get<keywordDataType[]>('', { headers });
    result.isSuccess = true;
    result.data = data;
  } catch (error) {
    const { message, errorCode } = checkError(error);
    result.errorMessage = errorCode ? unexpectedErrorOccursMention : message;
  }

  return result;
};

export const addKeywords = async (newKeyword: newKeywordType) => {
  const headers = getAuthHeaders();
  try {
    const response = await axios.post(
      `${API.KEYWORD}`,
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
    const response = await axios.delete(`${API.KEYWORD}`, {
      headers,
      data,
    });

    if (response.status === 200) return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRegisteredKeywords = async (regionName: string) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get(`${API.REGISTERED_KEYWORD}`, {
      headers,
      params: { location: regionName },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteRegisteredKeywords = async (id: number) => {
  const headers = getAuthHeaders();
  try {
    const response = await axios.delete(`${API.DELETE_REGISTERED_KEYWORD(id)}`, {
      headers,
    });
    if (response.status === 200) return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
