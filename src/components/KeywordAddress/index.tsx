import { ChangeEvent, useRef, useState } from 'react';

import { useSetRecoilState } from 'recoil';

import { getRegionWithGeo } from '@api/address';
import AddressList from '@components/AddressList';
import * as S from '@components/KeywordAddress/KeywordAddress.style';
import Portal from '@components/Portal';
import Icon from '@components/common/Icon';
import { searchAroundMention, searchWayMention } from '@constants/mentions';
import { SEARCH_ADDRESS } from '@constants/words';
import useGeolocation from '@hooks/useGeolocation';
import { portalState } from '@store/portal';

const KeywordAddress = () => {
  const [addressValue, setAddressValue] = useState('');
  const closeBtn = useRef<HTMLButtonElement>(null);
  const setPortal = useSetRecoilState(portalState);
  const { coordinates } = useGeolocation();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newAddressValue = event.target.value;
    setAddressValue(newAddressValue);
  };

  const handleClickAroundSearchBtn = async () => {
    if (coordinates) {
      const { lat, lng } = coordinates;
      const data = await getRegionWithGeo({ x: String(lng), y: String(lat) });
      const { address_name } = data;

      setAddressValue(address_name);
    }
  };

  return (
    <Portal type='full' portalName='keywordAddress'>
      <S.Wrapper>
        <S.TopWrapper>
          <S.Header>
            <S.HeaderBtn ref={closeBtn} isSearching={false} onClick={() => setPortal(null)}>
              <Icon iconName='X_Icon' />
            </S.HeaderBtn>
            <S.HeaderTitle>{SEARCH_ADDRESS}</S.HeaderTitle>
          </S.Header>

          <S.AddressInputArea onSubmit={(event) => event.preventDefault()}>
            <button>
              <Icon iconName='SearchSmall' iconSize={1.125} />
            </button>
            <S.AddressInput
              value={addressValue}
              onChange={handleChangeInput}
              placeholder={searchWayMention}
              maxLength={45}
            />
          </S.AddressInputArea>

          <S.AroundSearchButton onClick={handleClickAroundSearchBtn}>
            <Icon iconName='LocationMarker' />
            {searchAroundMention}
          </S.AroundSearchButton>
        </S.TopWrapper>
        <AddressList addressValue={addressValue} AddressListItemType='keywordAddress' />
      </S.Wrapper>
    </Portal>
  );
};

export default KeywordAddress;
