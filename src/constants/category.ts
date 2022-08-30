export interface CategoryItemType {
  id: number;
  name: string;
  filter: string;
}

export const shareListCategoryItem: CategoryItemType[] = [
  { id: 1, name: '가격순', filter: 'price' },
  { id: 2, name: '거리순', filter: 'distance' },
  { id: 3, name: '최신순', filter: 'recency' },
  { id: 4, name: '마감임박', filter: 'deadline' },
];

export interface HistoryListCategoryItemType {
  id: number;
  name: string;
  filter: boolean;
  type: string;
}

export const historyListCategoryItem: HistoryListCategoryItemType[] = [
  { id: 1, name: '쉐어중', filter: false, type: 'sales' },
  { id: 2, name: '기간만료', filter: true, type: 'sales' },
  { id: 3, name: '예약중', filter: false, type: 'purchase' },
  { id: 4, name: '기간만료', filter: true, type: 'purchase' },
];
