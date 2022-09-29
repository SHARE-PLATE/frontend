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

export type ChatroomDetailChatsType = {
  contents: string;
  writer: string;
  writerThumbnailImageUrl: string;
  writtenDateTime: string;
  writtenByMe: boolean;
}[];

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
  chats: ChatroomDetailChatsType;
};

export type ChatroomsStateType = 'entry' | 'question';
