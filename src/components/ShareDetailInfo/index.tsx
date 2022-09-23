import { useEffect, useRef, useState } from 'react';

import { v4 as getRandomKey } from 'uuid';

import { getRegionWithGeo } from '@api/address';
import * as S from '@components/ShareDetailInfo/ShareDetailInfo.style';
import { locationMarker } from '@components/ShareDetailInfo/locationMarker';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { imageUrlsArrayListType } from '@type/shareList';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

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
}: imageUrlsArrayListType) => {
  const ImgContents = recruitmentMemberThumbnailImageUrls.map((member: string) => (
    <ImgContainer
      key={getRandomKey()}
      imgSrc={member}
      imgTitle={member}
      imgWrapperRatio={1 / 1}
      imgWrapperWidth='2.9rem'
      borderRadius='5rem'
    />
  ));

  const hashtagContents = hashtags.map((tag) => (
    <S.Hashtag key={getRandomKey()}>
      <span>#</span>
      <span>{tag}</span>
    </S.Hashtag>
  ));

  const [mapState, setMapState] = useState(null);
  const mapRef = useRef(null);
  const [roadName, setRoadName] = useState('');
  const position = new kakao.maps.LatLng(latitude, longitude);

  const getRoadName = async () => {
    const { address_name } = await getRegionWithGeo({ x: longitude, y: latitude });
    setRoadName(address_name);
  };

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

  useEffect(() => {
    getRoadName();
  }, []);

  return (
    <S.ContentsContainer>
      <S.Title>{title}</S.Title>
      <S.UpperInfo>
        <S.BadgeWrapper>
          <S.Badge>{locationGuide}</S.Badge>
          {priceNegotiation && <S.Badge>가격 협의가능</S.Badge>}
          {locationNegotiation && <S.Badge>장소 협의가능</S.Badge>}
        </S.BadgeWrapper>
        <S.CreateTime>{calcTwoTimeDifference(createdDateTime)}</S.CreateTime>
      </S.UpperInfo>
      <S.LowerInfo>
        <S.PersonnelStatusWrapper>
          현재 쉐어 참여인원
          <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
        </S.PersonnelStatusWrapper>
        <S.ImgContentsWrapper>{ImgContents}</S.ImgContentsWrapper>
      </S.LowerInfo>
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
        <S.Map ref={mapRef} />
      </S.MapContainer>
    </S.ContentsContainer>
  );
};

export default ShareDetailInfo;
