import { atom } from 'recoil';

export const currentLatitudeLongitude = atom({
  key: 'currentLatitudeLongitude',
  default: { lat: 0, lng: 0 },
});

export const currentLocation = atom({
  key: 'currentLocation',
  default: '',
});
