import { useSetRecoilState } from 'recoil';

import * as S from '@components/ShareForm/Option/ShareForm.style';
import Icon from '@components/common/Icon';
import { addressOptionState } from '@store/address';
import { portalState } from '@store/portal';

const AddressContainer = ({ placeName }: { placeName: string | undefined }) => {
  const setPortal = useSetRecoilState(portalState);
  const setAddressPortalOption = useSetRecoilState(addressOptionState);

  const handleClickLocationSelectBtn = () => {
    setAddressPortalOption('SHARE');
    setPortal('address');
  };

  return (
    <S.LocationSelectButton type='button' onClick={handleClickLocationSelectBtn}>
      {placeName ? <span>{placeName}</span> : <S.NoneLocation>장소선택</S.NoneLocation>}
      <Icon iconName='ChevronRight' />
    </S.LocationSelectButton>
  );
};

export default AddressContainer;
