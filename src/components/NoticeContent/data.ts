import { NoticeActivityDataType, NoticeKeywordDataType } from '@api/notice';

export const activityData: NoticeActivityDataType = [
  {
    recruitmentMemberNickname: '루이123', //신청할경우
    notificationCreatedDateTime: '2022-10-28 14:00',
    shareTitle: '쉐어 제목',
    shareThumbnailImageUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
    shareId: 1,
    activityType: 'ENTRY',
  },
  {
    recruitmentMemberNickname: null, //마감일경우
    notificationCreatedDateTime: '2022-10-28 14:00',
    shareTitle: '치킨 같이 먹어요!',
    shareThumbnailImageUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
    shareId: 2,
    activityType: 'DEADLINE',
  },
];

export const keywordData: NoticeKeywordDataType = [
  {
    shareLocation: '강남역',
    shareId: 1,
    shareTitle: '쉐어 제목',
    shareThumbnailImageUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
    notificationCreatedDateTime: '2022-10-28 14:00',
  },
];
