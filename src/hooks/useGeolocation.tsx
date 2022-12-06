import { useState, useEffect } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';

import { getRegionWithGeo } from '@api/address';
import { defaultLat, defaultLng, defaultLocation } from '@constants/defaultLocation';
import { currentLocation, currentLatitudeLongitude, currentAddressName } from '@store/location';
import { getLocalStorageInfo } from '@utils/localStorage';

interface locationType {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}

type OnSuccessParamsType = { coords: { latitude: number; longitude: number } };

const useGeolocation = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });
  const [curLocation, setCurLocation] = useRecoilState(currentLocation);
  const setCurAddressName = useSetRecoilState(currentAddressName);
  const [{ lat: curLat, lng: curLng }, setCurLatLng] = useRecoilState(currentLatitudeLongitude);

  const prevAddressSelected = getLocalStorageInfo('addressSelected');

  // 성공에 대한 로직
  const onSuccess = async ({ coords: { latitude: lat, longitude: lng } }: OnSuccessParamsType) => {
    const regionData = await getRegionWithGeo({ x: lng, y: lat });
    const { address_name } = regionData;
    const isDefault =
      curLat === defaultLat && curLng === defaultLng && curLocation === defaultLocation;

    setLocation({
      loaded: true,
      coordinates: {
        lat,
        lng,
      },
    });

    if (prevAddressSelected) {
      const { lat: latSelected, lng: lngSelected, place_name } = prevAddressSelected[1];
      setCurLocation(place_name);
      setCurAddressName(place_name);
      setCurLatLng({ lat: latSelected, lng: lngSelected });
    } else if (isDefault) {
      setCurLocation(address_name);
      setCurAddressName(address_name);
      setCurLatLng({ lat, lng });
    }
  };

  // 에러에 대한 로직
  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: false,
      error,
    });
  };

  const requestCurrentPostion = () => navigator.geolocation.getCurrentPosition(onSuccess, onError);

  useEffect(() => {
    // navigator 객체 안에 geolocation이 없다면
    // 위치 정보가 없는 것.
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    requestCurrentPostion();
  }, []);

  return location;
};

export default useGeolocation;
