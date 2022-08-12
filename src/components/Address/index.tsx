import { useRef } from 'react';

import { useRecoilValue } from 'recoil';

import * as S from '@components/Address/Address.style';
import AddressModal from '@components/ModalContainer/AddressModal';
import Icon from '@components/common/Icon';
import useGeolocation from '@hooks/useGeolocation';
import useModal from '@hooks/useModal';
import { currentLocation } from '@store/location';

const Address = () => {
  const location = useGeolocation();
  const curLocation = useRecoilValue(currentLocation);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useModal({ modalRef });

  const openAddressModal = () => setIsAddressModalOpen(true);
  const closeAddressModal = () => setIsAddressModalOpen(false);
  return (
    <S.Wrapper>
      <S.LocationWrapper onClick={openAddressModal}>
        {curLocation ? curLocation : '강남역'}
      </S.LocationWrapper>
      <S.IconWrapper>
        <Icon iconName='ChevronDown' />
      </S.IconWrapper>
      {isAddressModalOpen && (
        <AddressModal modalRef={modalRef} closeAddressModal={closeAddressModal} />
      )}
    </S.Wrapper>
  );
};

export default Address;
