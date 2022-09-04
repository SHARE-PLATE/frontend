import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from '@components/Address/Address.style';
import Icon from '@components/common/Icon';
import { currentLocation } from '@store/location';
import { portalState } from '@store/portal';

const Address = () => {
  const setPortal = useSetRecoilState(portalState);
  const location = useRecoilValue(currentLocation);

  return (
    <S.Wrapper onClick={() => setPortal('address')}>
      <S.LocationWrapper>{location}</S.LocationWrapper>
      <S.IconWrapper>
        <Icon iconName='ChevronDown' />
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default Address;
