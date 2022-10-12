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
  type: 'QUESTION' | 'SHARE';
  writer: string;
};

export type ChatroomDetailDataType = {
  chatRoomMemberId: string;
  share: ChatroomDetailShareType;
  chats: ChatroomDetailChatsType;
};

export type ChatroomsStateType = 'entry' | 'question';
