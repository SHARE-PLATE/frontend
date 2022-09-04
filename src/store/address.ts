import { atom } from 'recoil';

export type SelectedAddressType = {
  id?: string;
  x?: string;
  y?: string;
  place_name?: string;
  road_address_name?: string;
  address_name?: string;
};

export const defaultSelectedAddress: SelectedAddressType = {};

export const SelectedAddress = atom({
  key: 'selectedAddress',
  default: defaultSelectedAddress,
});
