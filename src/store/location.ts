import { atom, selector } from 'recoil';

import { defaultLat, defaultLng, defaultLocation } from '@constants/defaultLocation';
import { AddressDetailType } from '@type/address';
import { getLocation } from '@utils/getLocation';

export interface CurrentLatitudeLongitudeType {
  lat: string | number;
  lng: string | number;
}

export const currentLatitudeLongitude = atom<CurrentLatitudeLongitudeType>({
  key: 'currentLatitudeLongitude',
  default: { lat: defaultLat, lng: defaultLng }, // 강남역
});

export const currentLocation = atom({
  key: 'currentLocation',
  default: defaultLocation,
});

export const changeLatitudeLongitude = selector({
  key: 'changeLatitudeLongitude',
  get: async ({ get }) => {
    const currentLatLon = get(currentLatitudeLongitude);
    const locationData = await getLocation(currentLatLon);
    return locationData;
  },
});

export const shareLocationState = atom<AddressDetailType>({
  key: 'shareLocation',
  default: {},
});
