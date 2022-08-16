import { useState, useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import { defaultLag, defaultLat } from '@constants/defaultLocation';
import { currentLatitudeLongitude } from '@store/location';

interface locationType {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}

const useGeolocation = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });
  // 서버 요청 계속 보내짐
  // const setCurrentLocation = useSetRecoilState(currentLatitudeLongitude);

  // 성공에 대한 로직
  const onSuccess = (location: { coords: { latitude: number; longitude: number } }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
    // setCurrentLocation({
    //   lat: location.coords.latitude,
    //   lng: location.coords.longitude,
    // });
  };

  // 에러에 대한 로직
  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: false,
      error,
    });
    // setCurrentLocation({
    //   lat: defaultLat,
    //   lng: defaultLag,
    // });
  };

  useEffect(() => {
    // navigator 객체 안에 geolocation이 없다면
    // 위치 정보가 없는 것.
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
