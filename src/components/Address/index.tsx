import { useRef } from 'react';

import { useRecoilValue } from 'recoil';

import AddressModal from '@components/ModalContainer/AddressModal';
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
    <>
      <div onClick={openAddressModal}>{curLocation ? curLocation : '강남역'}</div>
      {isAddressModalOpen && (
        <AddressModal modalRef={modalRef} closeAddressModal={closeAddressModal} />
      )}
    </>
  );
};

export default Address;
