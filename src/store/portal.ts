import { atom } from 'recoil';

export type PortalNameType =
  | 'search'
  | 'login'
  | 'sidebar'
  | 'address'
  | 'option'
  | 'keywordAddress'
  | null;

export type PortalType = 'modal' | 'sidebar' | 'full' | 'toast' | null;

export const portalState = atom<PortalNameType>({
  key: 'modal',
  default: null,
});
