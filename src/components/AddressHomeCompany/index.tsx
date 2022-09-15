import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { IconsType } from '@assets/icons';
import * as S from '@components/AddressHomeCompany/AddressHomeCompany.style';
import Icon from '@components/common/Icon';
import { COMPANY, HOME } from '@constants/words';
import { addressOptionState } from '@store/address';
import { addressRecentState } from '@store/localStorage';
import { currentLatitudeLongitude, currentLocation, shareLocationState } from '@store/location';
import { portalState } from '@store/portal';

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
  const addressOption = useRecoilValue(addressOptionState);
  const addressRecent = useRecoilValue(addressRecentState); // 수정 필요
  const setPortal = useSetRecoilState(portalState);
  const setShareLocation = useSetRecoilState(shareLocationState);
  const registeredAddress = addressRecent.get(type);
  const isSelected =
    registeredAddress && registeredAddress.lat === curLat && registeredAddress.lng === curLng;

  const handleClick = () => {
    if (registeredAddress) {
      const { lat, lng, place_name } = registeredAddress;
      if (addressOption === 'LOCATION') {
        setCurLocation(place_name || '');
        setCurLatitudeLongitude({ lat, lng });
      }
      if (addressOption === 'SHARE') {
        setPortal(null);
        setShareLocation(registeredAddress);
      }
    } else {
      // 집 설정, 주소 설정 상태일 때 클릭 시 나올 이벤트 설정
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
