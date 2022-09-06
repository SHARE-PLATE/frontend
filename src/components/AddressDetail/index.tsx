import { Dispatch, SetStateAction, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';

import * as S from '@components/AddressDetail/AddressDetail.style';
import AddressMap from '@components/AddressMap';
import Icon from '@components/common/Icon';
import { checkAddressWithMap } from '@constants/mentions';
import {
  ADDRESS_DETAIL,
  ADDRESS_GUIDE,
  ADDRESS_RECENT,
  COMPANY_KOR,
  DETAIL_ADDRESS,
  HOME_KOR,
} from '@constants/words';
import { addressRecentState } from '@store/localStorage';
import { currentLatitudeLongitude, currentLocation } from '@store/location';
import { portalState } from '@store/portal';
import { selectedAddressState, defaultSelectedAddressState } from '@store/selectedAddress';
import { setLocalStorageInfo } from '@utils/localStorage';

const AddressDetail = ({
  setIsSearching,
}: {
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}) => {
  const [addressDetail, setAddressDetail] = useState('');
  const [guide, setGuide] = useState('');
  const [isCompany, setIsCompany] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const [addressRecentList, setAddressRecentList] = useRecoilState(addressRecentState);
  const setPortal = useSetRecoilState(portalState);
  const setLatitudeLongitude = useSetRecoilState(currentLatitudeLongitude);
  const setLocation = useSetRecoilState(currentLocation);
  const [selectedAddress, setSelectedAddress] = useRecoilState(selectedAddressState);
  const { x: lat, y: lng, place_name, road_address_name, address_name, id } = selectedAddress;

  const handleClickHomeCompanyBtn = (target: 'HOME' | 'COMPANY') => {
    if (target === 'HOME') {
      setIsHome(!isHome);
      setIsCompany(false);
      return;
    }
    if (target === 'COMPANY') {
      setIsCompany(!isCompany);
      setIsHome(false);
    }
  };

  const handleClickFinishBtn = () => {
    if (!lat || !lng || !road_address_name || !id) return;

    addressRecentList.set(id, { lat, lng, place_name, road_address_name, address_name, id });

    // reset and close portal
    setPortal(null);
    setIsSearching(false);

    // set atoms
    setLatitudeLongitude({ lat, lng });
    setLocation(road_address_name);
    setAddressRecentList(() => addressRecentList);
    setSelectedAddress(defaultSelectedAddressState);

    // set local storage
    setLocalStorageInfo({ key: ADDRESS_RECENT, info: [...addressRecentList] });
  };

  return (
    <S.Wrapper isMap={isMap}>
      {!isMap && (
        <>
          <S.Header>
            <S.HeaderBtn onClick={() => setSelectedAddress(defaultSelectedAddressState)}>
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
            <S.HomeCompanyBtn isSelected={isHome} onClick={() => handleClickHomeCompanyBtn('HOME')}>
              <Icon iconName='Home' />
              {HOME_KOR}
            </S.HomeCompanyBtn>
            <S.HomeCompanyBtn
              isSelected={isCompany}
              onClick={() => handleClickHomeCompanyBtn('COMPANY')}
            >
              <Icon iconName='BriefCase' />
              {COMPANY_KOR}
            </S.HomeCompanyBtn>
          </S.HomeCompanyBtnWrapper>
          <S.MapCheckBtn onClick={() => setIsMap(true)}>
            <Icon iconName='Map' />
            {checkAddressWithMap}
          </S.MapCheckBtn>
          <S.FinishBtn onClick={handleClickFinishBtn}>완료</S.FinishBtn>
        </>
      )}
      {isMap && <AddressMap setIsMap={setIsMap} {...selectedAddress} />}
    </S.Wrapper>
  );
};

export default AddressDetail;
