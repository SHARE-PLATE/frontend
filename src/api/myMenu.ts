import axios from 'axios';

import { API } from '@constants/api';
import { getAuthHeaders } from '@utils/getAuthHeaders';

export const getProfileMyMenuData = async (
  mineType: string,
  curShareType: string,
  curShareFilterList: boolean,
) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get(`${API.MY_SHARE}`, {
      headers,
      params: {
        mineType: mineType,
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

export const deleteWishListContent = async (id: number) => {
  const headers = getAuthHeaders();
  const data = { shareId: id };

  try {
    const response = await axios.delete(`${API.DELETE_WISH_LIST}`, {
      headers,
      data,
    });

    if (response.status === 200) return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deletePurchaseList = async (id: number) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.delete(`${API.DELETE_HISTORY_LIST(id)}`, {
      headers,
    });

    if (response.status === 200) return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteMySalesList = async (id: number) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.delete(`${API.DELETE_SALES(id)}`, {
      headers,
    });
    if (response.status === 200) return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
