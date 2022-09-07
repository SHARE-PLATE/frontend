import { useRecoilState, useRecoilValue } from 'recoil';

import { IconsType } from '@assets/icons';
import * as S from '@components/AddressHomeCompany/AddressHomeCompany.style';
import Icon from '@components/common/Icon';
import { COMPANY, HOME } from '@constants/words';
import { useSetHomeCompany } from '@hooks/useSetHomeCompany';
import { addressRecentState } from '@store/localStorage';
import { currentLatitudeLongitude, currentLocation } from '@store/location';

type HomeCompanyType = typeof HOME | typeof COMPANY;

export type AddressHomeCompanyPropsType = {
  type: HomeCompanyType;
  iconName: IconsType;
  textKor: string;
  textAdd: string;
};

const AddressHomeCompany = ({ type, iconName, textKor, textAdd }: AddressHomeCompanyPropsType) => {
  const [{ lat: curLat, lng: curLng }, setCurLatitudeLongitude] =
    useRecoilState(currentLatitudeLongitude);
  const [curLocation, setCurLocation] = useRecoilState(currentLocation);
  const addressRecent = useRecoilValue(addressRecentState); // 수정 필요
  const setHomeCompany = useSetHomeCompany();
  const registeredAddress = addressRecent.get(type);
  const isSelected =
    registeredAddress && registeredAddress.lat === curLat && registeredAddress.lng === curLng;

  const handleClick = () => {
    if (registeredAddress) {
      const { lat, lng, place_name } = registeredAddress;
      setCurLocation(place_name || '');
      setCurLatitudeLongitude({ lat, lng });
    } else {
      setHomeCompany({ target: type, lat: curLat, lng: curLng, place_name: curLocation });
    }
  };

  return (
    <S.Wrapper onClick={handleClick}>
      <Icon iconName={iconName} />
      <S.Text>
        <div>{registeredAddress ? textKor : textAdd}</div>
        {registeredAddress && <div>{registeredAddress.place_name}</div>}
      </S.Text>
      {isSelected && <Icon iconName='CheckCircleColor' />}
    </S.Wrapper>
  );
};

export default AddressHomeCompany;
