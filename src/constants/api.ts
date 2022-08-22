export const API = {
  SHARE_LIST: `/api/shares`,
  SHARE_REGISTRATION: `/api/shares`,
  SHARE_DETAIL: (id?: string) => `/api/shares/${id}`,
  SHARE_RECOMMENDED: `/api/shares/recommendation`,
};
