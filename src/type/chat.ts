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

export type ChatroomDetailChatType = {
  contents: string;
  writer: string;
  writerThumbnailImageUrl: string;
  writtenDateTime: string;
  writtenByMe: boolean;
  shareWrittenByMe: boolean;
};

export type ChatroomDetailChatsType = ChatroomDetailChatType[];

export type ChatroomDetailShareType = {
  id: number;
  thumbnailImageUrl: string;
  title: string;
  price: number;
  originalPrice: number;
  currentRecruitment: number;
  finalRecruitment: number;
  cancel: boolean;
  location: string;
  closedDateTime: string;
  writer: string;
};

export type ChatroomDetailDataType = {
  chatRoomMemberId: number;
  type: 'QUESTION' | 'SHARE';
  share: ChatroomDetailShareType;
  chats: ChatroomDetailChatsType;
};

export type ChatroomsStateType = 'entry' | 'question';

export type ChatsUnreadType = {
  count: number;
};

export type ChatroomIdsType = { id: number; chatRoomId: number }[];

export type ChatroomsUpdate = {
  id?: number;
  chat?: ChatroomDetailChatType;
  trigger: number;
};
