import { ACTIVITY, KEYWORD } from '@constants/words';

export type ActiveNoticeType = typeof ACTIVITY | typeof KEYWORD;

export type GetNoticeParamsType = {
  type: ActiveNoticeType;
};

export type DeleteNoticeParamsType = {
  id?: number;
  idList?: number[];
};

export type ActivityType =
  | 'ENTRY'
  | 'DEADLINE'
  | 'ENTRY_CANCEL'
  | 'SHARE_CANCEL'
  | 'QUESTION_CHATROOM';

export type NoticeActivityDataType = {
  id: number;
  recruitmentMemberNickname?: string;
  notificationCreatedDateTime: string;
  shareTitle: string;
  shareThumbnailImageUrl: string;
  shareId: number;
  writerId: number;
  activityType: ActivityType;
};

export type NoticeKeywordDataType = {
  id: number;
  shareLocation: string;
  shareId: number;
  shareTitle: string;
  writerId: number;
  shareThumbnailImageUrl: string;
  notificationCreatedDateTime: string;
};

export type GetNoticeDataType<T extends ActiveNoticeType> = T extends 'activity'
  ? NoticeActivityDataType[]
  : NoticeKeywordDataType[];

export type NewNoticeStateType = NoticeActivityDataType | NoticeKeywordDataType | null;

export const getIsActivity = (
  contents: NoticeActivityDataType | NoticeKeywordDataType,
  //@ts-ignore ** 추후에 반드시 처리가 필요합니다!
): contents is NoticeActivityDataType => !!contents.activityType;
