import { atom } from 'recoil';

export type PortalNameType = 'search' | 'login' | 'sidebar' | 'address' | null;

export type PortalType = 'modal' | 'sidebar' | 'full' | null;

export const portalState = atom<PortalNameType>({
  key: 'modal',
  default: null,
});
