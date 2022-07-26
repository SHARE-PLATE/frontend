import { atom } from 'recoil';

export const modalState = atom<boolean>({
  key: 'modal',
  default: false,
});

export const sidebarState = atom<boolean>({
  key: 'sidebar',
  default: false,
});
