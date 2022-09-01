export interface userMenuType {
  id: number;
  title: string;
  link: string;
}

export const userMenu: userMenuType[] = [
  { id: 1, title: '공지사항', link: '이동' },
  { id: 2, title: '자주 묻는 질문', link: '이동' },
  { id: 3, title: '고객센터', link: '이동' },
  { id: 4, title: '키워드 알림', link: './keyword' },
];
