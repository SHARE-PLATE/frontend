import { ChangeEvent, useRef, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import AddressDetail from '@components/AddressDetail';
import AddressList from '@components/AddressList';
import * as S from '@components/AddressPortal/AddressPortal.style';
import AddressSetting from '@components/AddressSetting';
import Portal from '@components/Portal';
import Icon from '@components/common/Icon';
import { searchAroundMention, searchWayMention } from '@constants/mentions';
import { SEARCH_ADDRESS, SET_ADDRESS } from '@constants/words';
import { portalState } from '@store/portal';
import { selectedAddressState } from '@store/selectedAddress';

const AddressPortal = () => {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [addressValue, setAddressValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const setPortal = useSetRecoilState(portalState);
  const selectedAddress = useRecoilValue(selectedAddressState);
  const isSelectedAddress = !!selectedAddress.x;

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newAddressValue = event.target.value;
    setAddressValue(newAddressValue);
  };

  return (
    <Portal type='full' portalName='address' closeBtn={closeBtn}>
      <S.Wrapper>
        {!isSelectedAddress && (
          <>
            <S.TopWrapper>
              <S.Header onClick={() => setIsSearching(false)}>
                <S.HeaderBtn
                  ref={closeBtn}
                  isSearching={isSearching}
                  onClick={() => !isSearching && setPortal(null)}
                >
                  <Icon iconName={!isSearching ? 'X_Icon' : 'Back'} />
                </S.HeaderBtn>
                <S.HeaderTitle>{!isSearching ? SET_ADDRESS : SEARCH_ADDRESS}</S.HeaderTitle>
              </S.Header>

              <S.AddressInputArea onSubmit={(event) => event.preventDefault()}>
                <button>
                  <Icon iconName='SearchSmall' iconSize={1.125} />
                </button>
                <S.AddressInput
                  value={addressValue}
                  onFocus={() => setIsSearching(true)}
                  onChange={handleChangeInput}
                  placeholder={searchWayMention}
                  maxLength={45}
                />
              </S.AddressInputArea>

              <S.AroundSearchButton>
                <Icon iconName='LocationMarker' />
                {searchAroundMention}
              </S.AroundSearchButton>
            </S.TopWrapper>
            {!isSearching ? <AddressSetting /> : <AddressList addressValue={addressValue} />}
          </>
        )}
        {isSelectedAddress && <AddressDetail setIsSearching={setIsSearching} />}
      </S.Wrapper>
    </Portal>
  );
};

export default AddressPortal;
