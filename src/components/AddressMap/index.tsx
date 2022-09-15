import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import * as S from '@components/AddressMap/AddressMap.style';
import Icon from '@components/common/Icon';
import { SET_ADDRESS } from '@constants/words';
import { AddressInfoType } from '@type/address';

import { locationMarker } from './locationMarker';

interface AddressMapPropsType extends AddressInfoType {
  setIsMap: Dispatch<SetStateAction<boolean>>;
  handleClickFinishBtn: () => void;
}

const { kakao } = window as any;

const AddressMap = ({
  x,
  y,
  place_name,
  road_address_name,
  setIsMap,
  handleClickFinishBtn,
}: AddressMapPropsType) => {
  const [mapState, setMapState] = useState(null);
  const mapRef = useRef(null);
  const position = new kakao.maps.LatLng(y, x);

  const handleClickBackBtn = () => setIsMap(false);

  const initMap = () => {
    const options = { center: position, level: 3 };
    const newMap = new kakao.maps.Map(mapRef.current, options);

    setMapState(newMap);
  };

  const drawOverlay = () => {
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
        <div>{place_name}</div>
        <div>{road_address_name}</div>
        <S.FinishBtn onClick={handleClickFinishBtn}>{SET_ADDRESS}</S.FinishBtn>
      </S.LocationDescription>
    </S.Wrapper>
  );
};

export default AddressMap;
