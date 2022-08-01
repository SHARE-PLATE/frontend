import { atom, selector } from 'recoil';

import { getLocation } from '@utils/getLocation';

export interface currentLatitudeLongitudeType {
  lat: number;
  lng: number;
}

export const currentLatitudeLongitude = atom<currentLatitudeLongitudeType>({
  key: 'currentLatitudeLongitude',
  default: { lat: 0, lng: 0 },
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
