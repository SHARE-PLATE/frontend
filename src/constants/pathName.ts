export const pathName = {
  main: '/',
  shareList: '/share-list',
  loginCallback: '/login-callback',
  shareDetail: '/share-detail',
  notice: '/notice',
  error: '/error',
  shareForm: '/share-registration',
  profile: '/profile',
  chatrooms: '/chatrooms',
  chattingDetail: '/chatting-detail',
  searchShare: '/search-share',
  salesHistory: '/profile/sales-history',
  purchaseHistory: '/profile/purchase-history',
  other: '/*',
};

export type pathNameKeysType = keyof typeof pathName;
