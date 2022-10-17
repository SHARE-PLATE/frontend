import { IconsType } from '@assets/icons';

export interface userMenuType {
  id: number;
  title: string;
  icon: IconsType;
  link?: string;
  clickHandler?: () => void;
}

export const profileMenu: userMenuType[] = [
  { id: 1, title: '공지사항', icon: 'Microphone', link: '이동' },
  { id: 2, title: '자주 묻는 질문', icon: 'Flag', link: '이동' },
  { id: 3, title: '키워드 알림', icon: 'Bookmark', link: './keyword' },
];

export const settingMenu: userMenuType[] = [
  { id: 4, title: '판매상품', icon: 'SalesHistoryBlack', link: '../profile/sales-history' },
  { id: 5, title: '구매상품', icon: 'PurchaseHistoryBlack', link: '../profile/purchase-history' },
  {
    id: 6,
    title: '로그아웃',
    icon: 'Logout',
    clickHandler: () => {
      console.log('click!');
    },
  },
];
