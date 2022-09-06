import { useRecoilState, useRecoilValue } from 'recoil';

import * as S from '@components/AddressSetting/AddressSetting.style';
import Icon from '@components/common/Icon';
import {
  ADD_COMPANY,
  ADD_HOME,
  COMPANY,
  COMPANY_KOR,
  HOME,
  HOME_KOR,
  JIBUN,
} from '@constants/words';
import { useSetHomeCompany } from '@hooks/useSetHomeCompany';
import { addressRecentState } from '@store/localStorage';
import { currentLatitudeLongitude, currentLocation } from '@store/location';

const AddressSetting = () => {
  const [{ lat: curLat, lng: curLng }, setCurLatLng] = useRecoilState(currentLatitudeLongitude);
  const [curLocation, setCurLocation] = useRecoilState(currentLocation);
  const addressRecent = useRecoilValue(addressRecentState); // 수정 필요
  const setHomeCompany = useSetHomeCompany();
  const addressRecentList = [...addressRecent.values()];
  const registeredAddressList = addressRecentList.map(
    ({ id, road_address_name, address_name, place_name, lat, lng }) => {
      if (!address_name) return;

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
  const registeredHome = addressRecent.get(HOME);
  const registeredCompany = addressRecent.get(COMPANY);

  const handleClickHomeCompany = (target: typeof HOME | typeof COMPANY) => {
    setHomeCompany({ target, lat: curLat, lng: curLng, road_address_name: curLocation });
  };

  return (
    <>
      <S.HomeCompanyWrapper>
        <S.HomeCompanyBtn onClick={() => handleClickHomeCompany('HOME')}>
          <Icon iconName='HomeAdd' />
          <S.HomeCompanyText>
            <div>{registeredHome ? HOME_KOR : ADD_HOME}</div>
            {registeredHome && <div>{registeredHome.road_address_name}</div>}
          </S.HomeCompanyText>
        </S.HomeCompanyBtn>
        <S.HomeCompanyBtn onClick={() => handleClickHomeCompany('COMPANY')}>
          <Icon iconName='BriefCase' />
          <S.HomeCompanyText>
            <div>{registeredCompany ? COMPANY_KOR : ADD_COMPANY}</div>
            {registeredCompany && <div>{registeredCompany.road_address_name}</div>}
          </S.HomeCompanyText>
        </S.HomeCompanyBtn>
      </S.HomeCompanyWrapper>

      <S.RegisteredAddressList>{registeredAddressList}</S.RegisteredAddressList>
    </>
  );
};

export default AddressSetting;
