import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from '@components/AddressRegistered/AddressRegistered.style';
import Icon from '@components/common/Icon';
import { addressOptionState } from '@store/address';
import { AddressRecentType } from '@store/localStorage';
import { currentLatitudeLongitude, currentLocation, shareLocationState } from '@store/location';
import { portalState } from '@store/portal';

const AddressRegistered = ({ id, road_address_name, place_name, lat, lng }: AddressRecentType) => {
  if (!place_name || !road_address_name) return <></>; // hide home, company

  const [{ lat: curLat, lng: curLng }, setCurLatLng] = useRecoilState(currentLatitudeLongitude);
  const setPortal = useSetRecoilState(portalState);
  const setShareLocation = useSetRecoilState(shareLocationState);
  const setCurLocation = useSetRecoilState(currentLocation);
  const addressOption = useRecoilValue(addressOptionState);
  const isCurLocation = lat === curLat && lng === curLng;

  const handleClick = () => {
    if (addressOption === 'SHARE') {
      setShareLocation({ lat, lng, road_address_name, place_name });
      setPortal(null);
    }
    if (addressOption === 'LOCATION') {
      setCurLatLng({ lat, lng });
      setCurLocation(place_name);
    }
  };

  return (
    <S.Wrapper key={id} onClick={handleClick}>
      <Icon iconName='LocationMarker' />
      <S.AddressRegisteredText>
        <div>{place_name}</div>
        <div>{road_address_name}</div>
      </S.AddressRegisteredText>
      <Icon iconName={!isCurLocation ? 'DeleteCircle' : 'CheckCircleColor'} />
    </S.Wrapper>
  );
};
export default AddressRegistered;
