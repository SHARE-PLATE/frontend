import { useEffect, useRef, useState } from 'react';

import { v4 as getRandomKey } from 'uuid';

import { getRegionWithGeo } from '@api/address';
import * as S from '@components/ShareDetailInfo/ShareDetailInfo.style';
import { locationMarker } from '@components/ShareDetailInfo/locationMarker';
import ShareDetailRecruitments from '@components/ShareDetailRecruitments';
import Icon from '@components/common/Icon';
import { failToGetMapsMention } from '@constants/mentions';
import { LOCATION_NEGOTIATION, PRICE_NEGOTIATION } from '@constants/words';
import { ShareDetailType } from '@type/shareList';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

type ShareDetailInfoPropsType = ShareDetailType & {
  infoRef: (InfoDiv: HTMLDivElement) => void;
};

const { kakao } = window as any;

const ShareDetailInfo = ({
  title,
  location,
  locationGuide,
  createdDateTime,
  recruitmentMemberThumbnailImageUrls,
  currentRecruitment,
  finalRecruitment,
  description,
  priceNegotiation,
  locationNegotiation,
  wishCount,
  hashtags,
  latitude,
  longitude,
  infoRef,
}: ShareDetailInfoPropsType) => {
  const hashtagContents = hashtags.map((tag) => (
    <S.Hashtag key={getRandomKey()}>
      <span>#</span>
      <span>{tag}</span>
    </S.Hashtag>
  ));

  const [mapState, setMapState] = useState(null);
  const mapRef = useRef(null);
  const [roadName, setRoadName] = useState('');
  const position = kakao && new kakao.maps.LatLng(latitude, longitude);

  const getRoadName = async () => {
    const { address_name } = await getRegionWithGeo({ x: longitude, y: latitude });
    setRoadName(address_name);
  };

  const initMap = () => {
    if (!kakao) return;

    const options = { center: position, level: 3 };
    const newMap = new kakao.maps.Map(mapRef.current, options);

    setMapState(newMap);
  };

  const drawOverlay = () => {
    if (!kakao) return;

    const overlay = new kakao.maps.CustomOverlay({ position, content: locationMarker });
    overlay.setMap(mapState);
  };

  useEffect(() => {
    initMap();
  }, [mapRef]);

  useEffect(() => {
    drawOverlay();
  }, [mapState]);

  useEffect(() => {
    getRoadName();
  }, []);

  return (
    <S.ContentsContainer>
      <S.Title>{title}</S.Title>
      <S.UpperInfo ref={infoRef}>
        <S.BadgeWrapper>
          <S.Badge>{locationGuide}</S.Badge>
          {priceNegotiation && <S.Badge>{PRICE_NEGOTIATION}</S.Badge>}
          {locationNegotiation && <S.Badge>{LOCATION_NEGOTIATION}</S.Badge>}
        </S.BadgeWrapper>
        <S.CreateTime>{calcTwoTimeDifference(createdDateTime)}</S.CreateTime>
      </S.UpperInfo>
      <ShareDetailRecruitments
        currentRecruitment={currentRecruitment}
        finalRecruitment={finalRecruitment}
        recruitmentMemberThumbnailImageUrls={recruitmentMemberThumbnailImageUrls}
      />
      <S.Description>{description}</S.Description>
      <S.WishCount>
        <Icon iconName='HeartEmpty' iconSize={0.85} />
        {wishCount}
      </S.WishCount>
      <S.Hashtags>{hashtagContents}</S.Hashtags>
      <S.LocationWrapper>
        <span>주소</span>
        <S.Location>
          <span>{location}</span>
          <span>{roadName}</span>
        </S.Location>
      </S.LocationWrapper>
      <S.MapContainer>
        {kakao ? <S.Map ref={mapRef} /> : <S.NoMap>{failToGetMapsMention}</S.NoMap>}
      </S.MapContainer>
    </S.ContentsContainer>
  );
};

export default ShareDetailInfo;
