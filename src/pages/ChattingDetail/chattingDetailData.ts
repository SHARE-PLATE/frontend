export const testData = {
  share: {
    id: 1,
    thumbnailImageUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
    title: '채팅 상세 테스트',
    price: 10000,
    originalPrice: 40000,
    currentRecruitment: 3,
    finalRecruitment: 4,
  },
  chats: [
    {
      contents: '안녕하세요',
      wrtier: '닉네임1',
      writerThumbnailImageUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
      writtenDateTime: '2022-12-30 14:00',
      writtenByMe: 'false',
    },
    {
      contents: '안녕하세요',
      wrtier: '닉네임2',
      writerThumbnailImageUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
      writtenDateTime: '2022-12-30 14:01',
      writtenByMe: 'true',
    },
  ],
};

export type dataType = typeof testData;

export const defaultData = {
  share: {},
  chats: [],
};
