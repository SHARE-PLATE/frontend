import { useSetRecoilState } from 'recoil';

import * as S from '@components/ShareForm/AddressContainer/AddressContainer.style';
import Icon from '@components/common/Icon';
import { SELECT_LOCATION } from '@constants/words';
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
      <S.PlaceNameWrapper isPlaceName={!!placeName}>
        {placeName || SELECT_LOCATION}
      </S.PlaceNameWrapper>
      <Icon iconName='ChevronRight' iconSize={0.73} />
    </S.LocationSelectButton>
  );
};

export default AddressContainer;
