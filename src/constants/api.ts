export const API = {
  SHARE_LIST: `/api/shares`,
  SHARE_REGISTRATION: `/api/shares`,
  SHARE_DETAIL: (id?: string) => `/api/shares/${id}`,
  SHARE_RECOMMENDED: `/api/shares/recommendation`,
  CHATTING_DETAIL: '/api/chatrooms',
  SOCKET: '/api/socket',
  LOGIN_FORM: '/login/form',
  LOGIN: '/api/login',
  LOGOUT: '/api/logout',
  CHECK_LOGIN: '/api/reissue/access-token',
  WISH_LIST: '/api/wish-list',
};
