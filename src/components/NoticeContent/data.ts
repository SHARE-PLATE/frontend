import { NoticeActivityDataType, NoticeKeywordDataType } from '@type/notice';

export const activityData: NoticeActivityDataType[] = [
  {
    id: 0,
    recruitmentMemberNickname: '루이123', //신청할경우
    notificationCreatedDateTime: '2022-10-28 14:00',
    shareTitle: '쉐어 제목',
    shareThumbnailImageUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
    shareId: 1,
    writerId: 2,
    activityType: 'ENTRY',
  },
  {
    id: 1,
    recruitmentMemberNickname: undefined, //마감일경우
    notificationCreatedDateTime: '2022-10-28 14:00',
    shareTitle: '치킨 같이 먹어요!',
    shareThumbnailImageUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
    shareId: 2,
    writerId: 2,
    activityType: 'DEADLINE',
  },
];

export const keywordData: NoticeKeywordDataType[] = [
  {
    id: 0,
    shareLocation: '강남역',
    shareId: 1,
    shareTitle:
      '쉐어 제목 쉐어 제목 쉐어 제목 쉐어 제목 쉐어 제목 쉐어 제목 쉐어 제목 제목 쉐어 제목 쉐어 제목 제목 쉐어 제목 쉐어 제목 제목 쉐어 제목 쉐어 제목 제목 쉐어 제목 쉐어 제목 ',
    writerId: 1,
    shareThumbnailImageUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
    notificationCreatedDateTime: '2022-10-28 14:00',
  },
];
