import { ChangeEvent, FormEvent, ReactElement, useRef, useState } from 'react';

import { getAddressWithKeyword } from '@api/address';
import * as S from '@components/AddressPortal/AddressPortal.style';
import AddressSearchTip from '@components/AddressSearchTip';
import Portal from '@components/Portal';
import Icon from '@components/common/Icon';
import { searchAroundMention, searchWayMention } from '@constants/mentions';
import { ADD_COMPANY, ADD_HOME, JIBUN, ROAD_NAME, SET_ADDRESS } from '@constants/words';
import { useDebounce } from '@hooks/useDebounce';

const 임시주소 = '하나로마트';
const 임시지번 = '충북 청주시 예체로1';
const 임시주소들 = [{ id: 0, address: 임시주소, jibun: 임시지번 }];

const addressSearchingDelay = 500; // ms

const AddressPortal = () => {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [addressValue, setAddressValue] = useState('');
  const [addressList, setAddressList] = useState<ReactElement>();
  const [isList, setIsList] = useState(false);

  const registeredAddressList = 임시주소들.map(({ id, address, jibun }) => (
    <S.RegisteredAddress key={id}>
      <Icon iconName='LocationMarker' />
      <S.RegisteredAddressText>
        <div>{address}</div>
        <div>{`[${JIBUN}]${jibun}`}</div>
      </S.RegisteredAddressText>
      <Icon iconName='DeleteCircle' />
    </S.RegisteredAddress>
  ));

  const setAddressListWithData = async (value: string) => {
    if (!value) return;

    const addressListData = await getAddressWithKeyword(value);
    if (!addressListData.length) {
      const noAddressList = (
        <S.noAddressList>
          <Icon iconName='Search' iconSize={4.8} />
          {'검색 결과가 없습니다.\n지번, 도로명, 건물명을 입력해주세요.'}
        </S.noAddressList>
      );
      setAddressList(noAddressList);
      return;
    }

    const newAddressList = addressListData.map(({ id, place_name, road_address_name }) => (
      <S.AddressListItem key={id}>
        {place_name}
        <S.AddressListRoadName>
          <div>{ROAD_NAME}</div>
          <div>{road_address_name}</div>
        </S.AddressListRoadName>
      </S.AddressListItem>
    ));

    setAddressList(<>{newAddressList}</>);
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newAddressValue = event.target.value;
    setAddressValue(newAddressValue);
  };

  const handleSubmitAddress = async (event: FormEvent) => {
    event.preventDefault();
    setAddressListWithData(addressValue);
  };

  useDebounce({
    func: () => setAddressListWithData(addressValue),
    delay: addressSearchingDelay,
    deps: [addressValue],
  });

  return (
    <Portal type='full' portalName='address' closeBtn={closeBtn}>
      <S.Wrapper>
        <S.TopWrapper>
          <S.Header
            onClick={() => {
              setIsList(false);
            }}
          >
            <S.CloseBtn ref={closeBtn} isList={isList}>
              <Icon iconName={!isList ? 'X_Icon' : 'Back'} />
            </S.CloseBtn>
            <S.HeaderTitle>{SET_ADDRESS}</S.HeaderTitle>
          </S.Header>

          <S.AddressInputArea onSubmit={handleSubmitAddress}>
            <button>
              <Icon iconName='SearchSmall' iconSize={1.125} />
            </button>
            <S.AddressInput
              value={addressValue}
              onFocus={() => setIsList(true)}
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

        {!isList && (
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
        )}

        {isList && !addressValue.length && <AddressSearchTip />}

        {isList && !!addressValue.length && (
          <S.AddressListWrapper>{addressList}</S.AddressListWrapper>
        )}
      </S.Wrapper>
    </Portal>
  );
};

export default AddressPortal;
