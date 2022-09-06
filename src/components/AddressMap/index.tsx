/*global kakao */

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import * as S from '@components/AddressMap/AddressMap.style';
import Icon from '@components/common/Icon';
import { SelectedAddressType } from '@store/selectedAddress';

import { locationMarker } from './locationMarker';

interface AddressMapPropsType extends SelectedAddressType {
  setIsMap: Dispatch<SetStateAction<boolean>>;
}

const { kakao } = window as any;

const AddressMap = ({
  x: lat,
  y: lng,
  address_name,
  road_address_name,
  setIsMap,
}: AddressMapPropsType) => {
  const [mapState, setMapState] = useState(null);
  const mapRef = useRef(null);

  const handleClickBackBtn = () => setIsMap(false);

  const initMap = () => {
    const position = new kakao.maps.LatLng(lat, lng);
    const options = { center: position, level: 3 };
    const newMap = new kakao.maps.Map(mapRef.current, options);

    setMapState(newMap);
  };

  const drawOverlay = () => {
    const position = new kakao.maps.LatLng(lat, lng);
    const overlay = new kakao.maps.CustomOverlay({ position, content: locationMarker });

    overlay.setMap(mapState);
  };

  useEffect(() => {
    initMap();
  }, [mapRef]);

  useEffect(() => {
    drawOverlay();
  }, [mapState]);

  return (
    <S.Wrapper>
      <S.MapContainer>
        <S.BackBtn onClick={handleClickBackBtn}>
          <Icon iconName='Back' />
        </S.BackBtn>
        <S.Map ref={mapRef} />
      </S.MapContainer>
      <S.LocationDescription>
        <div>{road_address_name}</div>
        <div>{address_name}</div>
      </S.LocationDescription>
    </S.Wrapper>
  );
};

export default AddressMap;
