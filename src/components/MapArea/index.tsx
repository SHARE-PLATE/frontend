import { useEffect, useRef, useState, useLayoutEffect, MouseEvent, TouchEvent } from 'react';

import { useSetRecoilState, useRecoilValue } from 'recoil';

import { CurrentLocationMarker } from '@components/MapArea/CurrentLocationMarker';
import * as S from '@components/MapArea/MapArea.style';
import { ShareListMarker } from '@components/MapArea/ShareListMarker';
import { curTopAtom, maxTopAtom, minTopAtom } from '@store/shareMap';
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

  const setCurTop = useSetRecoilState(curTopAtom);
  const minTop = useRecoilValue(minTopAtom);
  const [totalHeight, setTotalHeight] = useState<number>(0);
  const maxTop = useRecoilValue(maxTopAtom);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const changeClickTrue = () => setIsClicked(true);
  const changeClickFalse = () => setIsClicked(false);

  useLayoutEffect(() => {
    const height = document.getElementsByClassName('App')[0].clientHeight;
    setTotalHeight(height);
  }, []);

  const checkMousePoint = (e: MouseEvent<HTMLDivElement>) => {
    if (!isClicked) return;

    const y = e.clientY;
    const tempTop = (y / totalHeight) * 100;
    const divMousePoint = tempTop > minTop ? minTop : tempTop;
    if (maxTop > divMousePoint) return changeClickFalse();

    setCurTop(divMousePoint);
  };

  const checkTouchPoint = (e: TouchEvent<HTMLDivElement>) => {
    if (!isClicked) return;

    const y = e.touches[0].clientY;
    const tempTop = (y / totalHeight) * 100;
    const divMousePoint = tempTop > minTop ? minTop : tempTop;

    if (maxTop > divMousePoint) return changeClickFalse();

    setCurTop(divMousePoint);
  };

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
    <S.Wrapper onMouseMove={checkMousePoint} onTouchMove={checkTouchPoint}>
      <S.MapContainer>
        <S.Map ref={mapRef} />
      </S.MapContainer>
    </S.Wrapper>
  );
};

export default MapArea;
