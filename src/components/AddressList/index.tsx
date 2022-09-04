import { ReactElement, useState } from 'react';

import { getAddressWithKeyword } from '@api/address';
import * as S from '@components/AddressList/AddressList.style';
import AddressListItem from '@components/AddressListItem';
import AddressSearchTip from '@components/AddressSearchTip';
import Icon from '@components/common/Icon';
import { noAddressListMention } from '@constants/mentions';
import { useDebounce } from '@hooks/useDebounce';

type AddressListPropsType = {
  addressValue: string;
};

const searchingDelay = 500; // ms

const AddressList = ({ addressValue }: AddressListPropsType) => {
  const [addressList, setAddressList] = useState<ReactElement>();

  const setAddressListWithData = async (value: string) => {
    if (!value) return;

    const addressListData = await getAddressWithKeyword(value);
    if (!addressListData.length) {
      const noAddressList = (
        <S.noAddressList>
          <Icon iconName='Search' iconSize={4.8} />
          {noAddressListMention}
        </S.noAddressList>
      );
      setAddressList(noAddressList);
      return;
    }

    const newAddressList = addressListData.map((data) => (
      <AddressListItem key={data.id} {...data} />
    ));
    setAddressList(<>{newAddressList}</>);
  };

  useDebounce({
    func: () => setAddressListWithData(addressValue),
    delay: searchingDelay,
    deps: [addressValue],
  });

  return !!addressValue.length ? (
    <S.AddressListWrapper>{addressList}</S.AddressListWrapper>
  ) : (
    <AddressSearchTip />
  );
};

export default AddressList;
