export const pathName = {
  main: '/',
  shareList: '/share-list',
  loginCallback: '/login-callback',
  shareDetail: '/share-detail',
  notice: '/notice',
  error: '/error',
  shareForm: '/share-registration',
  shareFormDelivery: '/share-registration/delivery',
  shareFormIngredient: '/share-registration/ingredient',
  profile: '/profile',
  chatrooms: '/chatrooms',
  chatroomDetail: '/chatroom-detail',
  searchShare: '/search-share',
  salesHistory: '/profile/sales-history',
  purchaseHistory: '/profile/purchase-history',
  keyword: '/profile/keyword',
  addKeyword: '/profile/keyword/add-keyword',
  shareMap: '/shareMap',
  other: '/*',
};

export type pathNameKeysType = keyof typeof pathName;
