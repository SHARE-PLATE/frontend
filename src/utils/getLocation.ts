import axios from 'axios';

import { CurrentLatitudeLongitudeType } from '@store/location';

export const getLocation = async (currentLatLon: CurrentLatitudeLongitudeType) => {
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
