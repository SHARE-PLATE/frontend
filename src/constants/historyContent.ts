interface HistoryContentType {
  title: string;
  mineType: string;
}

export const salesListItem: HistoryContentType = { title: '판매내역', mineType: 'writer' };
export const purchaseListItem: HistoryContentType = { title: '구매내역', mineType: 'entry' };
