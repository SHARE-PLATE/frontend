export interface categoryItemType {
  id: number;
  name: string;
  filter: string;
}

export const categoryItem: categoryItemType[] = [
  { id: 1, name: '가격순', filter: 'price' },
  { id: 2, name: '거리순', filter: 'distance' },
  { id: 3, name: '최신순', filter: 'recency' },
  { id: 4, name: '마감임박', filter: 'deadline' },
];
