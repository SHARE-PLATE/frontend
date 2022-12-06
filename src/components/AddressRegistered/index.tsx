import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from '@components/AddressRegistered/AddressRegistered.style';
import Icon from '@components/common/Icon';
import { addressOptionState } from '@store/address';
import { AddressLocalStorageType } from '@store/localStorage';
import {
  currentAddressName,
  currentLatitudeLongitude,
  currentLocation,
  shareLocationState,
} from '@store/location';
import { portalState } from '@store/portal';
import { setLocalStorageInfo } from '@utils/localStorage';

const AddressRegistered = ({
  id,
  road_address_name,
  place_name,
  lat,
  lng,
}: AddressLocalStorageType) => {
  if (!place_name || !road_address_name) return <></>; // hide home, company

  const [{ lat: curLat, lng: curLng }, setCurLatLng] = useRecoilState(currentLatitudeLongitude);
  const setPortal = useSetRecoilState(portalState);
  const setShareLocation = useSetRecoilState(shareLocationState);
  const setCurLocation = useSetRecoilState(currentLocation);
  const setCurAddressName = useSetRecoilState(currentAddressName);
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
      setCurAddressName(road_address_name);
      setLocalStorageInfo({
        key: 'addressSelected',
        info: [id, { lat, lng, road_address_name, place_name }],
      });
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
