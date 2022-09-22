import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from '@components/Address/Address.style';
import Icon from '@components/common/Icon';
import { addressOptionState } from '@store/address';
import { currentLocation } from '@store/location';
import { portalState } from '@store/portal';

const Address = () => {
  const setAddressOption = useSetRecoilState(addressOptionState);
  const setPortal = useSetRecoilState(portalState);
  const location = useRecoilValue(currentLocation);

  const handleClickAddress = () => {
    setPortal('address');
    setAddressOption('LOCATION');
  };

  return (
    <S.Wrapper onClick={handleClickAddress}>
      <S.LocationWrapper>{location}</S.LocationWrapper>
      <S.IconWrapper>
        <Icon iconName='ChevronDown' iconSize={0.85} />
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default Address;
