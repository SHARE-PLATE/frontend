import axios from 'axios';

import { API } from '@constants/api';
import { CHATROOM_ID } from '@constants/words';
import * as T from '@type/chat';
import { getAuthHeaders } from '@utils/getAuthHeaders';

export type GetChatroomsDataParamsType = {
  type: T.ChatroomsStateType;
};

export type GetChatroomDetailDataParamsType = {
  id: string;
};

export const getChatroomsData = async ({ type }: GetChatroomsDataParamsType) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get<T.ChatroomsDataType[]>(API.CHATROOMS, {
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

export const getChatroomDetailData = async ({ id }: GetChatroomDetailDataParamsType) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get<T.ChatroomDetailDataType>(`${API.CHATROOMS}/${id}`, {
      headers,
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

export const getPersonalChatroom = async ({ shareId }: { shareId: string }) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.post<{ id: string }>(API.CHATROOMS, { shareId }, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChatsUnread = async () => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get<T.ChatsUnreadType>(API.CHATS_UNREAD, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChatroomIds = async () => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get<T.ChatroomIdsType>(API.CHATROOM_IDS, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
