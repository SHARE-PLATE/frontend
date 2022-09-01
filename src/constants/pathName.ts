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
  chatroomDetail: '/chatroom-detail',
  searchShare: '/search-share',
  salesHistory: '/profile/sales-history',
  purchaseHistory: '/profile/purchase-history',
  keyword: '/profile/keyword',
  addKeyword: '/profile/keyword/add-keyword',
  other: '/*',
};

export type pathNameKeysType = keyof typeof pathName;
