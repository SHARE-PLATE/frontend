import { atom } from 'recoil';

export type PortalStateType = 'modal' | 'sidebar' | 'full' | null;

export const portalState = atom<PortalStateType>({
  key: 'modal',
  default: null,
});
