import { useEffect, useRef, useState } from 'react';

import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { CurrentLocationMarker } from '@components/ShareMapArea/CurrentLocationMarker';
import { SelectedShareListMarker } from '@components/ShareMapArea/SelectedShareListMarker';
import { ShareListMarker } from '@components/ShareMapArea/ShareListMarker';
import * as S from '@components/ShareMapArea/ShareMapArea.style';
import Icon from '@components/common/Icon';
import { activeShareList as activeShareListState } from '@store/filterShareList';
import { currentLatitudeLongitude } from '@store/location';
import { getShareListsData } from '@store/shareList';
import { clickedShareIdState, mapLatitudeLongitudeState } from '@store/shareMap';

const { kakao } = window as any;

const ShareMapArea = () => {
  const [markers, setMarkers] = useState<any[]>([]);
  const [isRotated, setIsRotated] = useState(true);
  const [mapState, setMapState] = useState<any>(null);
  const mapRef = useRef(null);
  const targetBlurRef = useRef<(id: number | null) => void>();
  const activeShareList = useRecoilValue(activeShareListState);
  const [mapLatitudeLogitude, setMapLatitudeLongitude] = useRecoilState(mapLatitudeLongitudeState);
  const curLatitudeLongitude = useRecoilValue(currentLatitudeLongitude);
  const [clickedShareId, setClickedShareId] = useRecoilState(clickedShareIdState);
  const centerLatitudeLogitude = mapLatitudeLogitude || curLatitudeLongitude;
  const { lat: curLat, lng: curLng } = curLatitudeLongitude;
  const { lat: centerLat, lng: centerLng } = centerLatitudeLogitude;
  const curPosition = new kakao.maps.LatLng(curLat, curLng);
  const centerPosition = new kakao.maps.LatLng(centerLat, centerLng);
  const { state: dataState, contents } = useRecoilValueLoadable(
    getShareListsData({ newLatitudeLongitude: { lat: centerLat, lng: centerLng } }),
  );

  const blurPrevMarker = () => {
    if (targetBlurRef.current) targetBlurRef.current(clickedShareId);
  };

  const getClickedShare = (targetId: number) => {
    if (dataState !== 'hasValue') return;
    blurPrevMarker();
    setClickedShareId(targetId);
  };

  const initMap = () => {
    const options = { center: centerPosition, level: 4 };
    const newMap = new kakao.maps.Map(mapRef.current, options);
    setMapState(newMap);
  };

  const drawCurLocation = () => {
    const overlay = new kakao.maps.CustomOverlay({
      position: curPosition,
      content: CurrentLocationMarker,
    });
    overlay.setMap(mapState);
  };

  const drawShareList = () => {
    if (dataState !== 'hasValue' || !contents || !contents.data) return;
    if (markers.length) {
      markers.forEach((marker) => marker.setMap(null));
      setMarkers([]);
    }
    const newMarkers: any = [];

    contents.data.forEach(({ latitude, longitude, id }) => {
      const content = document.createElement('button');
      const position = new kakao.maps.LatLng(latitude, longitude);
      content.onclick = () => {
        getClickedShare(id);
        content.innerHTML = SelectedShareListMarker;
        // set current marker to default icon when other marker is clicked
        targetBlurRef.current = (targetId: number | null) => {
          if (targetId !== id) content.innerHTML = ShareListMarker;
        };
      };
      content.id = String(id);
      content.innerHTML = ShareListMarker;

      const markerInfo = { content, position };
      const marker = new kakao.maps.CustomOverlay(markerInfo);

      marker.setMap(mapState);
      newMarkers.push(marker);
    });

    setMarkers(newMarkers);
  };

  const getNewLocation = () => {
    if (!mapState) return;
    const { La: newLng, Ma: newLat } = mapState.getCenter();
    // La is Longitude, Ma is Latitude
    setClickedShareId(null);
    setMapLatitudeLongitude({ lng: newLng, lat: newLat });
  };

  const moveCenterLocation = () => {
    if (!mapState) return;
    const curLatLng = new kakao.maps.LatLng(curLat, curLng);
    mapState.panTo(curLatLng);
  };

  useEffect(() => {
    initMap();
  }, [mapRef]);

  // when data is updated or tabs are clicked
  useEffect(() => {
    drawCurLocation();
    drawShareList();
  }, [mapState, dataState, activeShareList]);

  // when data is updated
  useEffect(() => {
    if (dataState === 'loading') {
      setIsRotated(true);
    } else {
      setTimeout(() => setIsRotated(false), 900);
    }
  }, [dataState]);

  // change clicked marker
  useEffect(() => {
    blurPrevMarker();
  }, [clickedShareId]);

  return (
    <S.Wrapper>
      <S.ButtonsWrapper>
        <S.RescanButton onClick={getNewLocation} isRotated={isRotated}>
          <Icon iconName='Refresh' iconSize={0.84} />이 지역 재검색
        </S.RescanButton>
        <S.TargetButton onClick={moveCenterLocation}>
          <Icon iconName='Target' iconSize={1.125} />
        </S.TargetButton>
      </S.ButtonsWrapper>
      <S.Map ref={mapRef} />
    </S.Wrapper>
  );
};

export default ShareMapArea;
