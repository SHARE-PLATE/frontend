import { atom } from 'recoil';

import { LatitudeLongitudeType } from './location';

export const mapLatitudeLongitudeState = atom<LatitudeLongitudeType | null>({
  key: 'mapLatitudeLongitude',
  default: null,
});
