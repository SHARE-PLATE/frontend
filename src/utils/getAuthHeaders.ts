import { AUTHORIZATION, ACCESS_TOKEN } from '@constants/words';
import { getLocalStorageInfo } from '@utils/localStorage';

export const getAuthHeaders = () => {
  const headers = { [AUTHORIZATION]: getLocalStorageInfo(ACCESS_TOKEN) };
  return headers;
};
