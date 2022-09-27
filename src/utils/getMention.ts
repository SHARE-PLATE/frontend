import { notExpiry, notReservation, notShare, notWishList } from '@constants/mentions';

export const getHistoryMention = (historyType: string, curShareFilterList: boolean) => {
  if (curShareFilterList) return notExpiry;
  switch (historyType) {
    case 'sales':
      return notShare;
    case 'purchase':
      return notReservation;
    case 'wishList':
      return notWishList;
  }
};
