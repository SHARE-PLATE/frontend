import { useEffect, useRef, useState } from 'react';

import { CurrentLocationMarker } from '@components/MapArea/CurrentLocationMarker';
import * as S from '@components/MapArea/MapArea.style';
import { ShareListMarker } from '@components/MapArea/ShareListMarker';
import { ShareListType } from '@type/shareList';

interface MapAreaPropsType {
  lat: number;
  lng: number;
  data: ShareListType[];
}

const { kakao } = window as any;

const MapArea = ({ lat, lng, data }: MapAreaPropsType) => {
  const [mapState, setMapState] = useState(null);
  const mapRef = useRef(null);
  const curLocationPosition = new kakao.maps.LatLng(lat, lng);
  const shareListPosition = data.map(({ latitude, longitude }) => {
    return {
      content: ShareListMarker,
      position: new kakao.maps.LatLng(latitude, longitude),
    };
  });

  const initMap = () => {
    const options = { center: curLocationPosition, level: 4 };
    const newMap = new kakao.maps.Map(mapRef.current, options);
    setMapState(newMap);
  };

  const drawCurLocation = () => {
    const overlay = new kakao.maps.CustomOverlay({
      position: curLocationPosition,
      content: CurrentLocationMarker,
    });
    overlay.setMap(mapState);
  };

  const drawShareList = () => {
    shareListPosition.forEach((position) => {
      const overlay = new kakao.maps.CustomOverlay(position);
      overlay.setMap(mapState);
    });
  };

  useEffect(() => {
    initMap();
  }, [mapRef]);

  useEffect(() => {
    drawCurLocation();
    drawShareList();
  }, [mapState]);

  return (
    <S.Wrapper>
      <S.Map ref={mapRef} />
    </S.Wrapper>
  );
};

export default MapArea;
