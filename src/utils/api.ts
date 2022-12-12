import axios, { AxiosError, RawAxiosRequestHeaders } from 'axios';

import { unexpectedErrorOccursMention } from '@constants/mentions';
import { AUTHORIZATION, CONTENT_TYPE, APPLICATION_JSON } from '@constants/words';
import { getIsString } from '@utils/getIsString';
import { getLocalStorageInfoTest } from '@utils/localStorage';

type UseFetchParamsType = {
  address: string;
  isContentType?: boolean;
  isAuth?: boolean;
};

type ErrorDataType = { message: string; errorCode?: string };

type ResultType<T> = {
  isSuccess: boolean;
  data?: T;
  errorMessage?: string;
};

const serverApiAddress = process.env.REACT_APP_BASE_URL;

export const createClient = <T>({ address, isContentType, isAuth }: UseFetchParamsType) => {
  const baseURL = `${serverApiAddress}/${address}`;
  const headers: RawAxiosRequestHeaders = {};
  const result: ResultType<T> = { isSuccess: false };

  if (isContentType) {
    headers[CONTENT_TYPE] = APPLICATION_JSON;
  }
  if (isAuth) {
    const accessToken = getLocalStorageInfoTest<string>(getIsString)({ key: 'access-token' });
    headers[AUTHORIZATION] = `${accessToken}`;
  }

  const client = axios.create({ baseURL, headers });

  return { client, result };
};

export const checkError = (error: any): ErrorDataType => {
  const { response } = error as AxiosError<ErrorDataType>;
  if (!response) {
    console.error(error);
    return { message: unexpectedErrorOccursMention };
  } else {
    return response.data;
  }
};
