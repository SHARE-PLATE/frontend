import { atom, selector } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import {
  defaultAddressName,
  defaultLat,
  defaultLng,
  defaultLocation,
} from '@constants/defaultLocation';
import { AddressDetailType } from '@type/address';
import { getLocation } from '@utils/getLocation';

export type LatitudeLongitudeType = {
  lat: string | number;
  lng: string | number;
};

export const currentLatitudeLongitude = atom<LatitudeLongitudeType>({
  key: `currentLatitudeLongitude/${getRandomKey()}`,
  default: { lat: defaultLat, lng: defaultLng },
});

export const currentLocation = atom({
  key: `currentLocation/${getRandomKey()}`,
  default: defaultLocation,
});

export const currentAddressName = atom({
  key: `currentAddressName/${getRandomKey()}`,
  default: defaultAddressName,
});

export const changeLatitudeLongitude = selector({
  key: `changeLatitudeLongitude/${getRandomKey()}`,
  get: async ({ get }) => {
    const currentLatLon = get(currentLatitudeLongitude);
    const locationData = await getLocation(currentLatLon);
    return locationData;
  },
});

export const shareLocationState = atom<AddressDetailType>({
  key: `shareLocation/${getRandomKey()}`,
  default: {},
});
