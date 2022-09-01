import { useSetRecoilState } from 'recoil';

import * as S from '@components/Address/Address.style';
import Icon from '@components/common/Icon';
import { portalState } from '@store/portal';

const Address = () => {
  const setPortal = useSetRecoilState(portalState);

  return (
    <S.Wrapper onClick={() => setPortal('address')}>
      <S.LocationWrapper>강남역</S.LocationWrapper>
      <S.IconWrapper>
        <Icon iconName='ChevronDown' />
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default Address;
