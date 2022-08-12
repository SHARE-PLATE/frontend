export interface listExampleType {
  id: number;
  thumbnailUrl: string;
  title: string;
  location: string;
  latitude?: number;
  longitude?: number;
  price: number;
  originalPrice: number;
  finalRecruitment: number;
  currentRecruitment: number;
  createdDateTime: string;
  recruitmentLimit: boolean;
  appointmentDateTime: string;
}

export const listExample: listExampleType[] = [
  {
    id: 1,
    thumbnailUrl: 'https://avatars.githubusercontent.com/u/68788849?v=4',
    title: '제목1',
    location: '강남역',
    price: 10000,
    originalPrice: 30000,
    currentRecruitment: 1,
    finalRecruitment: 3,
    recruitmentLimit: true,
    createdDateTime: '2022-08-03 13:57',
    appointmentDateTime: '2022-08-11 00:00',
  },
  {
    id: 2,
    thumbnailUrl: 'https://avatars.githubusercontent.com/u/68788849?v=4',
    title: '제목2',
    location: '교대역',
    price: 12000,
    originalPrice: 46000,
    currentRecruitment: 1,
    finalRecruitment: 4,
    recruitmentLimit: false,
    createdDateTime: '2022-08-03 15:57',
    appointmentDateTime: '2022-08-11 00:00',
  },
  {
    id: 3,
    thumbnailUrl: 'https://avatars.githubusercontent.com/u/68788849?v=4',
    title: '제목3',
    location: '서초역',
    price: 5000,
    originalPrice: 10000,
    currentRecruitment: 1,
    finalRecruitment: 2,
    recruitmentLimit: true,
    createdDateTime: '2022-08-03 14:57',
    appointmentDateTime: '2022-08-11 00:00',
  },
  {
    id: 4,
    thumbnailUrl: 'https://avatars.githubusercontent.com/u/68788849?v=4',
    title: '제목4',
    location: '방배역',
    price: 6000,
    originalPrice: 30000,
    currentRecruitment: 2,
    finalRecruitment: 5,
    recruitmentLimit: true,
    createdDateTime: '2022-08-09 17:57',
    appointmentDateTime: '2022-08-10 11:30',
  },
  {
    id: 5,
    thumbnailUrl: 'https://avatars.githubusercontent.com/u/68788849?v=4',
    title: '제목5',
    location: '사당역',
    price: 3300,
    originalPrice: 9900,
    currentRecruitment: 1,
    finalRecruitment: 3,
    recruitmentLimit: false,
    createdDateTime: '2022-08-03 19:57',
    appointmentDateTime: '2022-08-10 16:00',
  },
];
