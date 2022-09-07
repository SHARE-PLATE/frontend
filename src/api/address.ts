import axios from 'axios';

export type AddressListType = {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
};

type GetAddressWithKeywordDataType = {
  documents: AddressListType[];
};

type GetWithGeoParamsType = { x: string | number; y: string | number };

type GetAddressWithKeywordParamsType = {
  query: string;
  x?: string;
  y?: string;
};

type GetRegionWithGeoDataType = {
  documents: {
    address_name: string;
    main_address_no: string;
    mountain_yn: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    sub_address_no: string;
    zip_code: string;
  }[];
};

const kakaoAddressCategoryApi = 'https://dapi.kakao.com/v2/local/search/category.json';
const kakaoAddressKeywordApi = 'https://dapi.kakao.com/v2/local/search/keyword.json';
const kakaoAddressGeoApi = 'https://dapi.kakao.com/v2/local/geo/coord2address.json';
const kakaoRegionGeoApi = 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json';

export const getRegionWithGeo = async ({ x, y }: GetWithGeoParamsType) => {
  const response = await axios.get<GetRegionWithGeoDataType>(kakaoRegionGeoApi, {
    headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}` },
    params: { x, y },
  });
  const { documents } = response.data;

  return documents[0];
};

export const getAddressWithGeo = ({ x, y }: GetWithGeoParamsType) => {
  const response = axios.get(kakaoAddressGeoApi, {
    headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}` },
    params: { x, y },
  });

  return response;
};

export const getAddressWithKeyword = async ({ query, x, y }: GetAddressWithKeywordParamsType) => {
  const response = await axios.get<GetAddressWithKeywordDataType>(kakaoAddressKeywordApi, {
    headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}` },
    params: { query, x, y },
  });
  const { documents } = response.data;
  return documents;
};

export const getAddressWithCategory = async ({ x, y }: { x: string; y: string }) => {
  const response = await axios.get<GetAddressWithKeywordDataType>(kakaoAddressCategoryApi, {
    headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}` },
    params: { category_group_code: ['CE7', 'FD6'], x, y },
  });
  const { documents } = response.data;
  return documents;
};
