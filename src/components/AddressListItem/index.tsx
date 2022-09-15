import { useSetRecoilState } from 'recoil';

import { AddressListType } from '@api/address';
import * as S from '@components/AddressListItem/AddressListItem.style';
import { ROAD_NAME } from '@constants/words';
import { selectedAddressState } from '@store/address';

const AddressListItem = ({
  id,
  address_name,
  place_name,
  road_address_name,
  x,
  y,
}: AddressListType) => {
  if (!road_address_name) return <></>;

  const setSelectedAddress = useSetRecoilState(selectedAddressState);

  return (
    <S.Wrapper
      onClick={() => setSelectedAddress({ x, y, place_name, road_address_name, address_name, id })}
    >
      {place_name}
      <S.RoadName>
        <div>{ROAD_NAME}</div>
        <div>{road_address_name}</div>
      </S.RoadName>
    </S.Wrapper>
  );
};

export default AddressListItem;
