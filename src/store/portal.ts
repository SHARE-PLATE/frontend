import { atom } from 'recoil';

export type PortalNameType = 'search' | 'login' | 'sidebar' | 'address' | 'option' | null;

export type PortalType = 'modal' | 'sidebar' | 'full' | 'half' | null;

export const portalState = atom<PortalNameType>({
  key: 'modal',
  default: null,
});
