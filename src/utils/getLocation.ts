import axios from 'axios';

import { LatitudeLongitudeType } from '@store/location';

export const getLocation = async (currentLatLon: LatitudeLongitudeType) => {
  //kakao REST API에 get 요청을 보낸다.
  //파라미터 x,y에 lon,lat을 넣어주고 API_KEY를 Authorization헤더에 넣어준다.
  axios
    .get(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${currentLatLon.lng}&y=${currentLatLon.lat}&input_coord=WGS84`,
      { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_TOKEN}` } },
    )
    .then((res) => {
      console.log(res.data.documents);
    })
    .catch((e) => console.log(e));
};

export const findRegionName = (addressArr: string[]) => {
  const regionNameArr = ['동', '읍', '면', '리'];

  for (let i = 0; i < regionNameArr.length; i++) {
    const findArrResult = addressArr.find((string) => string.at(-1) === regionNameArr[i]);
    if (findArrResult) return findArrResult;
  }
};
