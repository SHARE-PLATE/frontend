import { useRecoilValue } from 'recoil';

import * as S from '@components/AddressSetting/AddressSetting.style';
import Icon from '@components/common/Icon';
import { ADD_COMPANY, ADD_HOME, JIBUN } from '@constants/words';
import { addressRecentState } from '@store/localStorage';

const AddressSetting = () => {
  const addressRecentData = useRecoilValue(addressRecentState); // 수정 필요
  const addressRecent = [...addressRecentData.values()];
  const registeredAddressList = addressRecent.map(
    ({ id, road_address_name, address_name, place_name }) => (
      <S.RegisteredAddress key={id}>
        <Icon iconName='LocationMarker' />
        <S.RegisteredAddressText>
          <div>{road_address_name}</div>
          <div>{`[${JIBUN}] ${address_name} ${place_name}`}</div>
        </S.RegisteredAddressText>
        <Icon iconName='DeleteCircle' />
      </S.RegisteredAddress>
    ),
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
