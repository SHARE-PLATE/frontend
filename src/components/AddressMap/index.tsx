import { useEffect, useRef, useState } from 'react';

import * as S from '@components/AddressMap/AddressMap.style';
import Icon from '@components/common/Icon';
import { SelectedAddressType } from '@store/selectedAddress';

const { kakao } = window as any;

const AddressMap = ({ x: lat, y: lng, address_name, road_address_name }: SelectedAddressType) => {
  const [mapState, setMapState] = useState(null);
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
        <S.FirstAddress>{road_address_name}</S.FirstAddress>
        <S.SecondAddress>{address_name}</S.SecondAddress>
      </S.LocationDescription>
    </S.Wrapper>
  );
};

export default AddressMap;
