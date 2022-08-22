export const pathName = {
  main: '/',
  shareList: '/share-list',
  loginCallback: '/login-callback',
  shareDetail: '/share-detail',
  notice: '/notice',
  error: '/error',
  shareForm: '/share-registration',
  profile: '/profile',
  chatting: '/chatting',
  chattingDetail: '/chatting-detail',
  other: '/*',
};

export type pathNameKeysType = keyof typeof pathName;
