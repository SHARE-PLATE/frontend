interface categoryItemType {
  id: number;
  name: string;
  link: string;
}

export const categoryItem: categoryItemType[] = [
  { id: 1, name: '가격순', link: '필터' },
  { id: 2, name: '거리순', link: '필터' },
  { id: 3, name: '최신순', link: '필터' },
  { id: 4, name: '마감임박', link: '필터' },
];
