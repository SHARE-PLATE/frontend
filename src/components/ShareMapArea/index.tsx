import { useEffect, useRef, useState } from 'react';

import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { CurrentLocationMarker } from '@components/ShareMapArea/CurrentLocationMarker';
import { ShareListMarker } from '@components/ShareMapArea/ShareListMarker';
import * as S from '@components/ShareMapArea/ShareMapArea.style';
import Icon from '@components/common/Icon';
import { currentLatitudeLongitude } from '@store/location';
import { getShareListsData } from '@store/shareList';
import { clickedShareIdState, mapLatitudeLongitudeState } from '@store/shareMap';

const { kakao } = window as any;

const ShareMapArea = () => {
  const [isRotated, setIsRotated] = useState(true);
  const [mapState, setMapState] = useState<any>(null);
  const mapRef = useRef(null);
  const [mapLatitudeLogitude, setMapLatitudeLongitude] = useRecoilState(mapLatitudeLongitudeState);
  const curLatitudeLongitude = useRecoilValue(currentLatitudeLongitude);
  const setClickedShareId = useSetRecoilState(clickedShareIdState);
  const centerLatitudeLogitude = mapLatitudeLogitude || curLatitudeLongitude;
  const { lat: curLat, lng: curLng } = curLatitudeLongitude;
  const { lat: centerLat, lng: centerLng } = centerLatitudeLogitude;
  const curPosition = new kakao.maps.LatLng(curLat, curLng);
  const centerPosition = new kakao.maps.LatLng(centerLat, centerLng);
  const { state: dataState, contents } = useRecoilValueLoadable(
    getShareListsData({ newLatitudeLongitude: { lat: centerLat, lng: centerLng } }),
  );

  const getClickedShare = (targetId: number) => {
    if (dataState !== 'hasValue') return;
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
    if (dataState !== 'hasValue' || !contents) return;
    contents.forEach(({ latitude, longitude, id }) => {
      const content = document.createElement('div');
      content.onclick = () => getClickedShare(id);
      content.innerHTML = ShareListMarker;
      const markerInfo = {
        content,
        position: new kakao.maps.LatLng(latitude, longitude),
      };
      const marker = new kakao.maps.CustomOverlay(markerInfo);
      marker.setMap(mapState);
    });
  };

  const getNewLocation = () => {
    if (!mapState) return;
    const { La: newLng, Ma: newLat } = mapState.getCenter();
    // La is Longitude, Ma is Latitude
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

  useEffect(() => {
    drawCurLocation();
    drawShareList();
  }, [mapState, dataState]);

  useEffect(() => {
    if (dataState === 'loading') {
      setIsRotated(true);
    } else {
      setTimeout(() => setIsRotated(false), 900);
    }
  }, [dataState]);

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
