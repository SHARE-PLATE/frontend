import { atom } from 'recoil';

import { AddressInfoType } from '@type/address';

export type AddressPortalOptionType = 'LOCATION' | 'SHARE';

export const selectedAddressState = atom<AddressInfoType>({
  key: 'selectedAddress',
  default: {},
});

export const addressOptionState = atom<AddressPortalOptionType>({
  key: 'addressPortalOption',
  default: 'LOCATION',
});
