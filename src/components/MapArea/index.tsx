import { useEffect, useRef, useState, useLayoutEffect, MouseEvent, TouchEvent } from 'react';

import { useSetRecoilState, useRecoilValue } from 'recoil';

import { CurrentLocationMarker } from '@components/MapArea/CurrentLocationMarker';
import * as S from '@components/MapArea/MapArea.style';
import ShareListSlide from '@components/MapArea/ShareListSlide';
import { curHightAtom, maxHeightAtom } from '@store/shareMap';
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
  const position = new kakao.maps.LatLng(37.49808633653005, 127.02800140627488);

  const [totalHeight, setTotalHeight] = useState<number>(0);
  const setCurHeight = useSetRecoilState(curHightAtom);
  const maxHeight = useRecoilValue(maxHeightAtom);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const changeClickTrue = () => setIsClicked(true);
  const changeClickFalse = () => setIsClicked(false);

  useLayoutEffect(() => {
    const height = document.getElementsByClassName('App')[0].clientHeight;
    setTotalHeight(height);
  }, []);

  const checkedMousePoint = (e: MouseEvent<HTMLDivElement>) => {
    if (!isClicked) return;
    const y = e.clientY;
    const divMousePoint = totalHeight - y;

    if (maxHeight < divMousePoint) return changeClickFalse();
    setCurHeight(divMousePoint);
  };

  const checkedTouchPoint = (e: TouchEvent<HTMLDivElement>) => {
    if (!isClicked) return;
    const y = e.touches[0].clientY;
    const divMousePoint = totalHeight - y;

    if (maxHeight < divMousePoint) return changeClickFalse();
    setCurHeight(divMousePoint);
  };

  const initMap = () => {
    const options = { center: position, level: 3 };
    const newMap = new kakao.maps.Map(mapRef.current, options);
    setMapState(newMap);
  };

  const drawOverlay = () => {
    const overlay = new kakao.maps.CustomOverlay({ position, content: CurrentLocationMarker });
    overlay.setMap(mapState);
  };

  useEffect(() => {
    initMap();
  }, [mapRef]);

  useEffect(() => {
    drawOverlay();
  }, [mapState]);

  return (
    <S.Wrapper onMouseMove={checkedMousePoint} onTouchMove={checkedTouchPoint}>
      <S.BackGround isClicked={isClicked}>
        <S.MapContainer>
          <S.Map ref={mapRef} />
        </S.MapContainer>
      </S.BackGround>

      <ShareListSlide
        isClicked={isClicked}
        maxHeight={maxHeight}
        contents={data}
        changeClickTrue={changeClickTrue}
        changeClickFalse={changeClickFalse}
      />
    </S.Wrapper>
  );
};

export default MapArea;
