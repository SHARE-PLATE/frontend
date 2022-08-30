interface HistoryContentType {
  type: string;
  title: string;
  mineType: string;
}

export const historyListItem: HistoryContentType[] = [
  {
    type: 'sales',
    title: '판매내역',
    mineType: 'writer',
  },
  {
    type: 'purchase',
    title: '구매내역',
    mineType: 'entry',
  },
];
