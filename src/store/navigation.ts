import { atom } from 'recoil';

export const isNavigationState = atom<boolean>({
  key: 'isNavigation',
  default: true,
});
