interface MyMenuContentType {
  type: string;
  title: string;
  mineType: string;
}

export const historyListItem: MyMenuContentType[] = [
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

export const wishListItem: MyMenuContentType = {
  type: 'wishList',
  title: '찜한 리스트',
  mineType: 'wish',
};
