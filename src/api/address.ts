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

const kakaoAddressKeywordApi = 'https://dapi.kakao.com/v2/local/search/keyword.json';
const kakaoAddressGeoApi = 'https://dapi.kakao.com/v2/local/geo/coord2address.json';

export const geoToAddress = (x: string, y: string) => {
  axios.get(kakaoAddressGeoApi, {
    headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}` },
    params: { x, y },
  });
};

export const getAddressWithKeyword = async (query: string) => {
  const response = await axios.get<GetAddressWithKeywordDataType>(kakaoAddressKeywordApi, {
    headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}` },
    params: { query },
  });
  const { documents } = response.data;
  return documents;
};
