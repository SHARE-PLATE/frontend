import { IconsType } from '@assets/icons';

import { pathNameKeysType } from './pathName';

export interface userMenuType {
  id: number;
  title: string;
  icon: IconsType;
  link: pathNameKeysType;
  isLogout?: boolean;
}

export const profileMenu: userMenuType[] = [
  { id: 1, title: '공지사항', icon: 'Microphone', link: 'main' },
  { id: 2, title: '자주 묻는 질문', icon: 'Flag', link: 'main' },
  { id: 3, title: '키워드 알림', icon: 'Bookmark', link: 'keyword' },
];

export const settingMenu: userMenuType[] = [
  { id: 4, title: '판매상품', icon: 'SalesHistoryBlack', link: 'salesHistory' },
  { id: 5, title: '구매상품', icon: 'PurchaseHistoryBlack', link: 'purchaseHistory' },
  {
    id: 6,
    title: '로그아웃',
    icon: 'Logout',
    link: 'main',
    isLogout: true,
  },
];
