import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/words';

import { getLocalStorageInfo } from './localStorage';

const getTokenHeaders = () => {
  const headers: any = {}; // headers 초기 설정 재정리 필요

  headers[ACCESS_TOKEN] = getLocalStorageInfo(ACCESS_TOKEN);
  headers[REFRESH_TOKEN] = getLocalStorageInfo(REFRESH_TOKEN);

  return headers;
};

export default getTokenHeaders;
