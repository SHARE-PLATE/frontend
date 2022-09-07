import { useRecoilValue } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import AddressHomeCompany from '@components/AddressHomeCompany';
import addressHomeCompanyInfo from '@components/AddressHomeCompany/addressHomeCompanyInfo';
import AddressRegistered from '@components/AddressRegistered';
import * as S from '@components/AddressSetting/AddressSetting.style';
import { addressRecentState } from '@store/localStorage';

const AddressSetting = () => {
  const addressRecent = useRecoilValue(addressRecentState); // 수정 필요
  const addressRecentList = [...addressRecent.values()];
  const addressRegisteredList = addressRecentList.map((addressInfo) => (
    <AddressRegistered key={addressInfo.id} {...addressInfo} />
  ));
  const AddressHomeCompanyBtns = addressHomeCompanyInfo.map((info) => (
    <AddressHomeCompany key={getRandomKey()} {...info} />
  ));

  return (
    <>
      <S.HomeCompanyWrapper>{AddressHomeCompanyBtns}</S.HomeCompanyWrapper>
      <S.AddressRegisteredList>{addressRegisteredList}</S.AddressRegisteredList>
    </>
  );
};

export default AddressSetting;
