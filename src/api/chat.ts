import axios from 'axios';

import { API } from '@constants/api';
import { CHATROOM_ID } from '@constants/words';
import { getAuthHeaders } from '@utils/getAuthHeaders';

export type GetChatroomsDataParamsType = {
  type: 'entry' | 'question';
};

export type GetChatroomDetailDataParamsType = {
  id: string;
};

export type ChatroomsDataType = {
  id: string;
  chatRoomMemberId: number;
  shareThumbnailImageUrl: string;
  currentRecruitment: number;
  recentMessage: string;
  recentMessageDataTime: string;
  recruitmentMemberNicknames: string[];
  recruitmentMemberImageUrls: string[];
  unreadCount: number;
};

export type ChatroomDetailDataType = {
  chatRoomMemberId: string;
  share: {
    id: number;
    thumbnailImageUrl: string;
    title: string;
    price: number;
    originalPrice: number;
    currentRecruitment: number;
    finalRecruitment: number;
    cancel: boolean;
  };
  chats: {
    contents: string;
    writer: string;
    writerThumbnailImageUrl: string;
    writtenDateTime: string;
    writtenByMe: boolean;
  }[];
};

export const getChatroomsData = async ({ type }: GetChatroomsDataParamsType) => {
  const headers = getAuthHeaders();

  try {
    const response = await axios.get<ChatroomsDataType[]>(API.CHATROOMS, {
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
    const response = await axios.get<ChatroomDetailDataType>(`${API.CHATROOMS}/${id}`, {
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
