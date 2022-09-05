import { useEffect, useRef, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from '@components/MapPortal/MapPortal.style';
import Portal from '@components/Portal';
import Icon from '@components/common/Icon';
import { currentLatitudeLongitude } from '@store/location';

const { kakao } = window as any;

const MapPortal = () => {
  const [mapState, setMapState] = useState(null);
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);
  const mapRef = useRef(null);

  const initMap = () => {
    const center = new kakao.maps.LatLng(lat, lng);
    const options = {
      center,
      level: 2,
    };
    const map = new kakao.maps.Map(mapRef.current, options);
    setMapState(map);
  };

  const position = new kakao.maps.LatLng(lat, lng);
  const content = `<div style="${S.overlayStyle}">쉐어장소</div>`;

  const drawOverlay = () => {
    const overlay = new kakao.maps.CustomOverlay(position);
    overlay.setMap(mapState);
  };

  const startOverlay = new kakao.maps.CustomOverlay({
    position,
    content,
  });

  startOverlay.setMap(mapState);

  useEffect(initMap, [mapRef]);
  useEffect(drawOverlay, [mapState]);

  const handleClickClose = () => {};

  return (
    <S.Wrapper>
      <S.MapContainer>
        <Icon iconName='Back' iconSize='LARGE' handleClick={handleClickClose} />
        <div className='map-area' ref={mapRef} />
      </S.MapContainer>
      <S.LocationDescription>
        <S.FirstAddress>강남역</S.FirstAddress>
        <S.SecondAddress>서울특별시 강남구 강남대로 지하 396</S.SecondAddress>
      </S.LocationDescription>
    </S.Wrapper>
  );
};

export default MapPortal;
