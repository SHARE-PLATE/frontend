import { atom, selector } from 'recoil';

import { getLocation } from '@utils/getLocation';

export interface CurrentLatitudeLongitudeType {
  lat: string;
  lng: string;
}

export const currentLatitudeLongitude = atom<CurrentLatitudeLongitudeType>({
  key: 'currentLatitudeLongitude',
  default: { lat: '37.498095', lng: '127.027611' }, // 강남역
});

export const currentLocation = atom({
  key: 'currentLocation',
  default: '',
});

export const changeLatitudeLongitude = selector({
  key: 'changeLatitudeLongitude',
  get: async ({ get }) => {
    const currentLatLon = get(currentLatitudeLongitude);
    const locationData = await getLocation(currentLatLon);
    return locationData;
  },
});
