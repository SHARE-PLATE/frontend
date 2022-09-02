import { RefObject } from 'react';

import DaumPostcode, { Address } from 'react-daum-postcode';
import { useRecoilState } from 'recoil';

import * as S from '@components/AddressModal/AddressModal.style';
import Modal from '@components/common/Modal';
import { currentLocation } from '@store/location';

interface AddressModalPropsTypes {
  modalRef: RefObject<HTMLDivElement>;
  closeAddressModal: () => void;
}

const addressModalPosition = {
  top: '3.25rem',
};

const AddressModal = ({ modalRef, closeAddressModal }: AddressModalPropsTypes) => {
  const [curLocation, setCurLocation] = useRecoilState(currentLocation);

  const handlePostCode = (data: Address) => {
    console.log(data);
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setCurLocation((prev) => fullAddress);
  };

  return (
    <Modal position={addressModalPosition} isFull={true}>
      <DaumPostcode style={S.PostCodeStyle} onComplete={handlePostCode} />
    </Modal>
  );
};

export default AddressModal;
