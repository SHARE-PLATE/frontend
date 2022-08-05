export interface listExampleType {
  id: number;
  thumbnailUrl: string;
  title: string;
  location: string;
  latitude: number;
  longitude: number;
  price: number;
  originalPrice: number;
  appointmentDateTime: string;
}

export const listExample: listExampleType[] = [
  {
    id: 1,
    thumbnailUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
    title: '가격 3 시간 2',
    location: '강남역',
    latitude: 37.498095,
    longitude: 127.02761,
    price: 10000,
    originalPrice: 20000,
    appointmentDateTime: '2022-12-30/15:00',
  },
  {
    id: 2,
    thumbnailUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
    title: '가격 1 시간 3',
    location: '역삼역',
    latitude: 37.498095,
    longitude: 127.02761,
    price: 9000,
    originalPrice: 18000,
    appointmentDateTime: '2022-12-30/16:00',
  },
  {
    id: 3,
    thumbnailUrl: 'https://avatars.githubusercontent.com/u/67730358?v=4',
    title: '가격 2 시간 1',
    location: '강남역',
    latitude: 37.498095,
    longitude: 127.02761,
    price: 9500,
    originalPrice: 19000,
    appointmentDateTime: '2022-12-30/10:00',
  },
];
