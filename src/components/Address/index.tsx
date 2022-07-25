import { useRef } from 'react';

import AddressModal from '@components/Modal/AddressModal';
import useModal from '@hooks/useModal';

const Address = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useModal({ modalRef });

  const openAddressModal = () => setIsAddressModalOpen(true);

  return (
    <div onClick={openAddressModal}>
      address
      {isAddressModalOpen && <AddressModal modalRef={modalRef} />}
    </div>
  );
};

export default Address;
