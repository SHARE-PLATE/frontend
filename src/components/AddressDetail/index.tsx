import { Dispatch, SetStateAction, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';

import * as S from '@components/AddressDetail/AddressDetail.style';
import Icon from '@components/common/Icon';
import {
  ADDRESS_DETAIL,
  ADDRESS_GUIDE,
  ADDRESS_RECENT,
  COMPANY_KOR,
  DETAIL_ADDRESS,
  HOME_KOR,
} from '@constants/words';
import { SelectedAddress, defaultSelectedAddress } from '@store/address';
import { addressRecentState } from '@store/localStorage';
import { currentLatitudeLongitude, currentLocation } from '@store/location';
import { portalState } from '@store/portal';
import { setLocalStorageInfo } from '@utils/localStorage';

const AddressDetail = ({
  setIsSearching,
}: {
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}) => {
  const [addressDetail, setAddressDetail] = useState('');
  const [guide, setGuide] = useState('');
  const [addressRecentList, setAddressRecentList] = useRecoilState(addressRecentState);
  const setPortal = useSetRecoilState(portalState);
  const setLatitudeLongitude = useSetRecoilState(currentLatitudeLongitude);
  const setLocation = useSetRecoilState(currentLocation);
  const [selectedAddress, setSelectedAddress] = useRecoilState(SelectedAddress);
  const { x: lat, y: lng, place_name, road_address_name, address_name, id } = selectedAddress;

  const handleClickFinishBtn = () => {
    if (!lat || !lng || !road_address_name || !id) return;

    addressRecentList.set(id, { lat, lng, place_name, road_address_name, address_name, id });

    setLatitudeLongitude({ lat, lng });
    setLocation(road_address_name);
    setSelectedAddress(defaultSelectedAddress);
    setLocalStorageInfo({ key: ADDRESS_RECENT, info: [...addressRecentList] });
    setAddressRecentList(() => addressRecentList);
    setIsSearching(false);
    setPortal(null);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderBtn onClick={() => setSelectedAddress(defaultSelectedAddress)}>
          <Icon iconName={'Back'} />
        </S.HeaderBtn>
        <S.HeaderTitle>{DETAIL_ADDRESS}</S.HeaderTitle>
      </S.Header>
      <S.AddressInfo>
        <Icon iconName='LocationMarker' />
        <S.AddressInfoText>
          <div>{place_name}</div>
          <div>{road_address_name}</div>
        </S.AddressInfoText>
      </S.AddressInfo>
      <S.AddressInfoInput
        placeholder={ADDRESS_DETAIL}
        value={addressDetail}
        onChange={({ target: { value } }) => setAddressDetail(value)}
      />
      <S.AddressInfoInput
        placeholder={ADDRESS_GUIDE}
        value={guide}
        onChange={({ target: { value } }) => setGuide(value)}
      />
      <S.HomeCompanyBtnWrapper>
        <S.HomeCompanyBtn>
          <Icon iconName='Home' />
          {HOME_KOR}
        </S.HomeCompanyBtn>
        <S.HomeCompanyBtn>
          <Icon iconName='BriefCase' />
          {COMPANY_KOR}
        </S.HomeCompanyBtn>
      </S.HomeCompanyBtnWrapper>
      <S.MapCheckBtn>
        <Icon iconName='Map' />
        지도에서 위치 확인하기
      </S.MapCheckBtn>
      <S.FinishBtn onClick={handleClickFinishBtn}>완료</S.FinishBtn>
    </S.Wrapper>
  );
};

export default AddressDetail;
