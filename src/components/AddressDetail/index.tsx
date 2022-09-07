import { Dispatch, SetStateAction, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';

import * as S from '@components/AddressDetail/AddressDetail.style';
import AddressMap from '@components/AddressMap';
import Icon from '@components/common/Icon';
import { checkAddressWithMap } from '@constants/mentions';
import {
  ADDRESS_RECENT,
  COMPANY,
  COMPANY_KOR,
  DETAIL_ADDRESS,
  FINISH,
  HOME,
  HOME_KOR,
} from '@constants/words';
import { useSetHomeCompany } from '@hooks/useSetHomeCompany';
import { addressRecentState } from '@store/localStorage';
import { currentLatitudeLongitude, currentLocation } from '@store/location';
import { portalState } from '@store/portal';
import { selectedAddressState, defaultSelectedAddressState } from '@store/selectedAddress';
import { setLocalStorageInfo } from '@utils/localStorage';

type FixedAddressType = typeof HOME | typeof COMPANY | '';

const AddressDetail = ({
  setIsSearching,
}: {
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}) => {
  const [fixedAddress, setFixedAddress] = useState<FixedAddressType>('');
  const [isMap, setIsMap] = useState(false);
  const setHomeCompany = useSetHomeCompany();
  const [addressRecent, setAddressRecent] = useRecoilState(addressRecentState);
  const setPortal = useSetRecoilState(portalState);
  const setLatitudeLongitude = useSetRecoilState(currentLatitudeLongitude);
  const setLocation = useSetRecoilState(currentLocation);
  const [selectedAddress, setSelectedAddress] = useRecoilState(selectedAddressState);
  const { x: lng, y: lat, place_name, road_address_name, address_name, id } = selectedAddress;

  const handleClickHomeCompanyBtn = (target: FixedAddressType) => {
    setFixedAddress(target === fixedAddress ? '' : target);
  };

  const handleClickFinishBtn = () => {
    if (!lat || !lng || !place_name || !id) return;

    // change HOME or COMPANY

    const newAddressRecent = new Map(addressRecent);
    newAddressRecent.set(id, { lat, lng, place_name, road_address_name, address_name, id });

    // reset and close portal
    setPortal(null);
    setIsSearching(false);

    // set atoms
    setLatitudeLongitude({ lat, lng });
    setLocation(place_name);
    setSelectedAddress(defaultSelectedAddressState);

    // set address recent in atom, local storage
    if (fixedAddress !== '') {
      if (addressRecent.get(fixedAddress)) console.error(`${fixedAddress} CHANGED!`); // remove this line if alert modal is applied
      setHomeCompany({ target: fixedAddress, lat, lng, place_name });
    } else {
      setAddressRecent(newAddressRecent);
      setLocalStorageInfo({ key: ADDRESS_RECENT, info: [...newAddressRecent] });
    }
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
          <S.HomeCompanyBtnWrapper>
            <S.HomeCompanyBtn
              isSelected={fixedAddress === HOME}
              onClick={() => handleClickHomeCompanyBtn(HOME)}
            >
              <Icon iconName='Home' />
              {HOME_KOR}
            </S.HomeCompanyBtn>
            <S.HomeCompanyBtn
              isSelected={fixedAddress === COMPANY}
              onClick={() => handleClickHomeCompanyBtn(COMPANY)}
            >
              <Icon iconName='BriefCase' />
              {COMPANY_KOR}
            </S.HomeCompanyBtn>
          </S.HomeCompanyBtnWrapper>
          <S.MapCheckBtn onClick={() => setIsMap(true)}>
            <Icon iconName='Map' />
            {checkAddressWithMap}
          </S.MapCheckBtn>
          <S.FinishBtn onClick={handleClickFinishBtn}>{FINISH}</S.FinishBtn>
        </>
      )}

      {isMap && (
        <AddressMap
          setIsMap={setIsMap}
          handleClickFinishBtn={handleClickFinishBtn}
          {...selectedAddress}
        />
      )}
    </S.Wrapper>
  );
};

export default AddressDetail;
