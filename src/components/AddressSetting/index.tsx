import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from '@components/AddressSetting/AddressSetting.style';
import Icon from '@components/common/Icon';
import { ADD_COMPANY, ADD_HOME, JIBUN } from '@constants/words';
import { addressRecentState } from '@store/localStorage';
import { currentLatitudeLongitude, currentLocation } from '@store/location';

const AddressSetting = () => {
  const [{ lat: curLat, lng: curLng }, setCurLatLng] = useRecoilState(currentLatitudeLongitude);
  const setCurLocation = useSetRecoilState(currentLocation);
  const addressRecentData = useRecoilValue(addressRecentState); // 수정 필요
  const addressRecent = [...addressRecentData.values()];
  const registeredAddressList = addressRecent.map(
    ({ id, road_address_name, address_name, place_name, lat, lng }) => {
      const isCurLocation = lat === curLat && lng === curLng;
      const handleClick = () => {
        if (!road_address_name) return;

        setCurLatLng({ lat, lng });
        setCurLocation(road_address_name);
      };

      return (
        <S.RegisteredAddress key={id} onClick={handleClick}>
          <Icon iconName='LocationMarker' />
          <S.RegisteredAddressText>
            <div>{road_address_name}</div>
            <div>{`[${JIBUN}] ${address_name} ${place_name}`}</div>
          </S.RegisteredAddressText>
          <Icon iconName={!isCurLocation ? 'DeleteCircle' : 'CheckCircleColor'} />
        </S.RegisteredAddress>
      );
    },
  );

  return (
    <>
      <S.HomeAndCompanyWrapper>
        <button>
          <Icon iconName='HomeAdd' />
          {ADD_HOME}
        </button>
        <button>
          <Icon iconName='BriefCase' />
          {ADD_COMPANY}
        </button>
      </S.HomeAndCompanyWrapper>

      <S.RegisteredAddressList>{registeredAddressList}</S.RegisteredAddressList>
    </>
  );
};

export default AddressSetting;
