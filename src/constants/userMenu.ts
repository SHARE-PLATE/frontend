import { IconsType } from '@assets/icons';

export interface userMenuType {
  id: number;
  title: string;
  icon: IconsType;
  link: string;
}

export const userMenu: userMenuType[] = [
  { id: 1, title: '공지사항', icon: 'Microphone', link: '이동' },
  { id: 2, title: '자주 묻는 질문', icon: 'Flag', link: '이동' },
  { id: 4, title: '키워드 알림', icon: 'Bookmark', link: './keyword' },
];
